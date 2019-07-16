const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    refs: 'authors'
  },
  image: {
    type: String
  }
});

module.exports = Book = mongoose.model('books', BookSchema);
