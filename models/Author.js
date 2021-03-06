const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    refs: 'books'
  }]
});

module.exports = Author = mongoose.model('authors', AuthorSchema);
