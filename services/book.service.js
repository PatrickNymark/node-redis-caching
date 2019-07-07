const Book = require('../models/Book');
require('../helpers/cache');

module.exports = {
  createBook,
  getBooksByGenre,
  getAllBooks
}

/**
 * Create book.
 * @param {Object} bookData a object that represents a book.
 * @returns A Promise or exception.
 */
async function createBook(bookData) {
  const book = new Book(bookData);

  return book.save();
}

/**
 * Find books by genre
 * @param {String} genre a string that represents a book's genre
 * @returns A Promise or exception 
 */
async function getBooksByGenre(genre, user) {
  const books = Book.find({ genre }).cache({ key: user.sub });

  return books;
}

/**
 * Get all books
 * @returns A Promise or exception 
 */
async function getAllBooks() {
  return await Book.find().cache();
}