require('dotenv').config();

const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        
    },
})

module.exports = knex;

