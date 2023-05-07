const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const email_js = require('emailjs-com');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Configuration options for the PostgreSQL database
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
  user: 'myuser',
  password: 'mypassword',
};

// Initialize a connection pool for the PostgreSQL database
const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
});

// Middleware to parse JSON data from the request body
app.use(express.json());

// Middleware to handle CORS (Cross-Origin Resource Sharing) requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Route for user registration
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Hash the password using bcrypt before storing it in the database
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    // Insert the user's email and hashed password into the database
    await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2)',
      [email, hashedPassword]
    );

    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Route for user authentication
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database for the user's email and password hash
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    }

    // Sign a JWT token using the user's ID as the payload
    const token = jwt.sign({ userId: user.id }, 'mysecretkey', { expiresIn: '1h' });

    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: user.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Route for creating a new post
app.post('/posts', async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, authorId]
    );
    const newPost = result.rows[0];
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for fetching all posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    const posts = result.rows;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for fetching a single post by ID
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    const post = result.rows[0];
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for updating a post by ID
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    const updatedPost = result.rows[0];
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for deleting a post by ID
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    const deletedPost = result.rows[0];
    if (deletedPost) {
      res.json(deletedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const emailContent = {
    to: 'your-email@example.com',
    from: email,
    subject: `New message from ${name}`,
    text: message,
  };

  email_js.send('service_tk7hucg', 'template_1uh5d7b', emailContent, 'ZDyaFUpjb8MbPWzl3')
    .then((response) => {
      console.log('Email sent:', response);
      res.send('Email sent successfully');
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      res.status(500).send('Email sending failed');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});