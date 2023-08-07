# Blog App using Express, Mongoose

## Routes
- `/homepage` - used this endpoint for home page
- `/allblogs` - show all the blog are available in database
- `/addblog` - add blog into the database
- `/blogpage/:id` - get all the data of the blog on the bases of the id 

## Project Setup
To run project locally
- Clone repo
- `cd project 1` to go in to project 1
- `npm install` in root directory
- Set for `environment variables`
    - `PORT` - set port number to listen the server
    - `DB_URL` - url of your local_database or Atlas
- `npm run dev` & if nodemon not installed then `npm run start`
- use `http://127.0.0.1:${port}` to go to the page

## Project Overview
#### Home page
![Capture](https://github.com/bhalaniyatin2402/Milestone_2/assets/126591717/328ac73b-26c9-4bfa-b2b0-7b05f8d58766)

#### modal - add blog
![Capture1](https://github.com/bhalaniyatin2402/Milestone_2/assets/126591717/3982fe51-dcec-4461-8707-26962beb8c17)

#### readblog page
![Capture2](https://github.com/bhalaniyatin2402/Milestone_2/assets/126591717/bc231cdc-7f9e-4aa1-b774-e36abe1b02f5)
