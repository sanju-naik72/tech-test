# Stage 2 - Deploying With Confidence

## Dependencies
- [Github](https://github.com/)
- [Github Actions](https://github.com/)

## Background

You have recently started an engagement for a new customer. Until now, the feature team who builds a Create, Read, Update, Delete (CRUD) NodeJS service runs all validation on their local machines before pushing to the main branch. 
As a result, the engineers often forget to run tests before pushing and find themselves slowing down.
The customer has approached ClearRoute to set up Continuous Integration (CI) app so the team can deploy more often and with better confidence.


## Test

Please write a GitHub actions pipeline in a branch (this is free to do for open source repositories) which will trigger on a new push to the remote and validate the following areas in the pipeline for the project.

- End To End Tests
- The app can Build 
- Static Code Analyse (Lint)

Once done, send ClearRoute the url to your repository to review.

### Notes
- Think about which order you will want to run things.
- You should not have to change any of the app code.
- You don't need to run the app locally.
- It may be easier to use docker to run the database dependency instead of running it locally.
- The project README.md is the best place to look at how to get the app building and running.
