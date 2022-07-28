const Pool = require('pg').Pool;
const { Client } = require('pg')
// var pgtools = require("pgtools");

const config = {
  user: process.env.DB_USER || 'team19',
  password: process.env.DB_PASSWORD || 'northwestern',
  host: process.env.DB_HOST || 'nm-hackathon-19.c1dqmlzjizkp.us-east-2.rds.amazonaws.com',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'tradingstocks',
}

const pool = new Pool(config);

// const pool = new Client({
//   connectionString: 'postgres://kjphvoaxasyoce:8b84fa2b79fb352cd0154b15f19a5ca1b80cc130db242983cd9fa34157efc69c@ec2-3-230-122-20.compute-1.amazonaws.com:5432/d8ons7gsd1nfrh',
//   ssl: {
//     rejectUnauthorized: false
//   }
// })

// pool.connect();

module.exports = pool;
