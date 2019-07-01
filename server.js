const express = require('express');
const mongoose = require('mongoose');

// Initialize
const app = express();

// env config
require('dotenv').config();

// Routes
const posts = require('./routes/api/post');

// Database config
mongoose
  .connect(process.env.mongoURI, { useNewUrlParser: true })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// Body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router middleware
app.use('/api/posts', posts);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
