const dbConfig = {
  host: 'localhost',
  port: 5000,
  database: 'postgres',
  user: 'postgres',
  password: '---',
};

const express = require('express');
const { Pool } = require('pg');

const cors = require('cors');
app.use(cors());

const app = express();
const port = 5000;

app.use(express.json());

const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
});

app.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
      [username, password, email]
    );

    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});