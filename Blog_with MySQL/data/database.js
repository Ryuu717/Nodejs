require('dotenv').config()
MySQLPassword = process.env.MySQLPassword

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: MySQLPassword
});

module.exports = pool;