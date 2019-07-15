const Book = require('../models/Book');

module.exports = {
  createBook,
  getAllBooks,
  searchBooks,
  getBookById
}

/**
 * Create book.
 * @param {Object} bookData a object that represents a book.
 * @returns A Promise or exception.
 */
async function createBook(bookData) {
  const book = new Book(bookData);

  return await book.save();
};

/**
 * Get all books.
 * @returns A Promise or exception 
 */
async function getAllBooks() {
  return await Book.find().cache();
};

/**
 * Get book by id.
 * @param {String} id a string that represents a book's id 
 */
async function getBookById(id) {
  return await Book.findById(id).cache();
}

/**
 * Search books.
 * @param {Object} query express query object
 * @returns A Promise or exceptin
 */
async function searchBooks(query) {
  return await Book.find({ $or: 
    [
      { title: { '$regex': query.search, '$options': 'i' } }, 
      { genre: { '$regex': query.search, '$options': 'i' } }
    ]
  }).cache({ expire: 10 });
}
