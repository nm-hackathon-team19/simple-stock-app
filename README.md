# Fantasy Stock Trading App

> The application utilizes IEX Cloud API and was built using ReactJS (Frontend), Node.js and Express (Backend). It uses Chart.js for visual graphs along with PostgreSQL for database and styled with Bootstrap 4.

<img src="https://img.icons8.com/plasticine/480/000000/react.png" width="100"/><img src="https://img.icons8.com/color/480/000000/nodejs.png" width="100"/><img src="https://img.icons8.com/color/480/000000/postgreesql.png" width="100"/><img src="https://img.icons8.com/color/480/000000/bootstrap.png" width="100"/><img src="https://img.icons8.com/color/480/000000/heroku.png" width="100"/>

### Check out the app [HERE](https://trading-stocks-amitai.herokuapp.com/)!

<img src="https://user-images.githubusercontent.com/31068256/105555024-70df5600-5d00-11eb-994b-d3fe7f867659.png" width="700" /><img src="https://user-images.githubusercontent.com/31068256/105555105-98362300-5d00-11eb-9b9a-615a11faca3d.png" width="700" /><img src="https://user-images.githubusercontent.com/31068256/105555143-ae43e380-5d00-11eb-9f88-f37ec3fe8891.png" width="700" />

## Instruction & How to use this app

1. cd into the app root directory in your terminal
3. Create a local database (I used PostgresSQL) based on the queries in the db.js file
2. Run `touch .env` in the root directory
3. put in the relevant fields based on the sample file `.env_sample`
4. Run `npm i` command
5. cd into client folder and run `npm i` command
6. cd back to root directory and run `npm run dev`
7. open app in browser on `localhost:5000`

## Summary

This web application utilizes IEX Cloud API to retrieve and utilize stock information to simulate a stock trading application, using React-Bootstrap for styling and responsiveness. ReactJS was used to develop the frontend of the web application. While the backend uses Node.js with Express for RESTFUL WebAPI and Internal WebAPI calls. The PostgreSQL is being used to handle User, Account, Transaction and Holding information. React Context Hooks were used to store user, account, holding and other information to provide a smoother user experience.

## Technologies/Design

- HTML, CSS, JavaScript - Front End Stack
- React - Front End Framework
- Node.js and Express.js - Backend Stack and Internal API
- Postgre SQL - Database
- IEX Cloud API - RESTAPI
- Heroku - Hosting platform for both the web server and database
- Graphs - Chart.js

## Author

### Amitay Soffer- Full Stack Web Developer

<a href="https://www.esncz.org/sites/default/files/imce/under-construction.jpg" target="_blank" rel="noopener">Portfolio Website</a>

[LinkedIn](https://www.linkedin.com/in/amitay-soffer-137304151/)
