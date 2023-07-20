FROM node
WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl unzip && \
    rm -rf /var/lib/apt/lists/*

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf awscliv2.zip aws

ENV AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
ENV AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
ENV AWS_DEFAULT_REGION=us-east-1

COPY ./app-react/. .
RUN npm install
CMD ["npm", "run", "dev"]


# docker build -t tech-test:v1 .
# docker run -d -p 3000:3000 tech-test:v1