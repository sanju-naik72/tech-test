# Terraform

## Dependencies

- Terraform
- Cloud platform of choice (aws, azure, etc.)

## Background

Your new client is spending most of their time managing their cloud infrastructure through the UI cloud management console. You mention that this can all be handled through terraform, to which they respond "what's that?" in wonderment. You begin to explain before immediately being cut off by a blast of excitement - "Please give a demonstration of how terraform works! Maybe with a simple docker image that will be hosted on a cloud server". You think *huh, that's oddly specific, but ok!*...and you get straight to work.

## Test

We dont actually want you to upload this infrastructure! (avoid costs at all cost).
Instead, running terraform validate and plan commands will be enough.

The following points should be met:

- Run a server with a docker container of your choice
- Terraform apply/destroy should create/destroy the entire infrastructure
- Server must automatically start-up after a failure
- To impress the client you will want to run 2 servers of the same docker container to show it can scale
- Both containers should be reachable by the same static dns (can remain randomly generated but must be static)

## Notes

- Think about how your state will be stored
- Cloudformation docs are also good for understanding *Infrastructure as Code*, just be sure to go back to terraform docs for the correct syntax
