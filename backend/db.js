const { Pool } = require('pg');

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
  user: 'myuser',
  password: 'mypassword',
};

const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
});

module.exports = pool;