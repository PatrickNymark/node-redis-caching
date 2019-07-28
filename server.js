const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./helpers/error-handler');
const logger = require('morgan');

// initialize
const app = express();

// env config
require('dotenv').config();

// logger
app.use(logger('dev'));

// mongo config
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// cache config
require('./helpers/cache');

// Body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// routes
app.use('/api/books', require('./controllers/book.controller'));
app.use('/api/users', require('./controllers/user.controller'));
app.use('/api/authors', require('./controllers/author.controller'));

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
