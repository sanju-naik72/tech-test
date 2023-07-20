provider "aws" {
  region     = "us-east-1"
  access_key = "AKIASUIN5H7SZVBH46DJ"
  secret_key = "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"
}

resource "aws_vpc" "VPC1" {
  cidr_block = "10.0.0.0/16"
}

locals {
  availability_zones = ["a", "b", "c", "d", "e", "f"]
}

resource "aws_subnet" "public-SUB" {
  count                   = 2
  cidr_block              = "10.0.${count.index}.0/24"
  vpc_id                  = aws_vpc.VPC1.id
  availability_zone       = "us-east-1${local.availability_zones[count.index]}"
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "IGW" {
  vpc_id = aws_vpc.VPC1.id
}

resource "aws_route_table" "public-rt" {
  vpc_id = aws_vpc.VPC1.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.IGW.id
  }

  tags = {
    Name = "public-route-table"
  }
}

resource "aws_route_table_association" "public_association" {
  count          = 2
  subnet_id      = aws_subnet.public-SUB[count.index].id
  route_table_id = aws_route_table.public-rt.id
}



resource "aws_security_group" "SG-1" {
  name_prefix = "allow-http-"
  vpc_id      = aws_vpc.VPC1.id

  ingress {
    description = "HTTP from VPC"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "Docker" {
  count                  = 2
  ami                    = "ami-06ca3ca175f37dd66"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.public-SUB[count.index].id
  vpc_security_group_ids = [aws_security_group.SG-1.id]
  key_name               = aws_key_pair.testkey.key_name

  user_data = <<-EOF
    #!/bin/bash
    sudo yum update -y
    sudo yum install -y docker
    sudo service docker start
    sudo usermod -aG docker ec2-user
    sudo docker run -d -p 80:80 nginx
  EOF

  instance_initiated_shutdown_behavior = "stop"
}

resource "aws_key_pair" "testkey" {
  key_name   = "tech-test-1"
  public_key = file("./tech-test-1.pub")
}

resource "aws_lb" "LB" {
  name               = "ALB"
  internal           = false
  load_balancer_type = "application"
  subnets            = aws_subnet.public-SUB[*].id
}

resource "aws_lb_target_group" "tg-1" {
  name        = "tg-1"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.VPC1.id
  target_type = "instance"
  health_check {
    enabled = true
  }
}

resource "aws_lb_target_group_attachment" "tg-attachment" {
  count            = 2
  target_group_arn = aws_lb_target_group.tg-1.arn
  target_id        = aws_instance.Docker[count.index].id
  port             = 80
}

resource "aws_lb_listener" "lb-listner" {
  load_balancer_arn = aws_lb.LB.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg-1.arn
  }
}

