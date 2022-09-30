require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_SCHEMA } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD || "admin",
    database: DB_SCHEMA || "bluenetdev",
    host: DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_SCHEMA || "bluenetdev",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_SCHEMA || "bluenetdev",
    host: DB_HOST,
    dialect: "postgres"
  }
};

