# Book Stock Updater

Simple Book Stock Updater App where you can update the book's quantity and will simply give a message saying the books is "Out of Stock" or "Available".

## Tech-Stack
#### Back-end:
* PostgreSQL
* Node
* Express
* Knex 
* Jest

#### Front-end:
* React

## Setup
Make sure to have postgres and node installed.

Create a postgres database

```
1) run the command psql 
2) CREATE DATABASE <name of database>

```
Make a .env file in the root of the project directory in this format.

```
DB_HOST=localhost
DB_CLIENT=postgresql
DB_USER=<your database username>
DB_PASS=<your database pass>
DB_NAME=<database name>
DB_PORT=5432 

```

In the root of the project directory run npm install, this should install all the packages you need. 

```
npm install

```
To run the migrations and seed files run the following commands these should create the table and seed information to the database.

```
knex migrate:latest
knex seed:run

```

To run the server use the following command

```
npm run server

```

Have the server run while testing with jest and run the following command to see the tests.

```
npm run test

```
To see the Front-end go in to the directory called 'bonus' and use the following command

```
npm install

```

If you are working with windows. In the bonus directory go to package.json and set the port under the "start" key. 

```
"start": "set PORT=3002 && react-scripts start"

```
for other distributions just keep it as is. 

To run the Front-End just do the following

```
npm start

```

This should bring up the ui, and you should be able to play around with the quantity of the books. 

### Here are some screen shots of the app flow

Simple ERD for the database
!["Database"](/docs/images/database.png)

Testing with jest.

!["Jest Test"](/docs/images/jest_test_p1.png)

!["Jest Test"](/docs/images/jest_test_p2.png)

!["Jest Test"](/docs/images/jest_test_p3.png)

Front-End with Quantity Update

!["Front-End"](/docs/images/front_end_p1.png)

!["Front-End"](/docs/images/front_end_p2.png)

!["Front-End"](/docs/images/front_end_p3.png)


