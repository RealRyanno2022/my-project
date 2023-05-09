const { Pool } = require('pg');

const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'mydatabase',
    user: 'myuser',
    password: 'mypassword',
  };
  
  const pool = new Pool(dbConfig);
  
  module.exports = pool;