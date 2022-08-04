// import Sequelize constructor
const Sequelize = require('sequelize');

// for loading environment variables
require('dotenv').config();

// create connection to database, pass in MySQL information for username and password
let sequelize;

// use Heroku's remote database when connected, else use local database
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;