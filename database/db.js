const Pool = require('pg').Pool;
// var pgtools = require("pgtools");

const config = {
  user: process.env.DB_USER || 'nmteam19',
  password: process.env.DB_PASSWORD || 'northwestern',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'postgres',
}

const pool = new Pool(config);

module.exports = pool;
