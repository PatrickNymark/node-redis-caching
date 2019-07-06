const redis = require('redis');
const util = require('util');

// redis config
const client = redis.createClient(process.env.REDIS_URI);

const Book = require('../models/Book');

module.exports = {
  createBook,
  getBooksByGenre
}

/**
 * Create book.
 * @param {String} title a string that represents a book's title.
 * @param {Number} pages a number that represents a book's number of pages.
 * @param {Number} genre a string that represents a book's genre.
 * @param {String} author a string that represents a author's id.
 * @returns A Promise or exception.
 */
async function createBook(title, pages, genre, author) {
  client.get = util.promisify(client.get);

  const cachedBooks = client.get()

  const book = new Book({ title, pages, genre, author });

  return book.save();
}

/**
 * Find books by genre
 * @param {String} genre a string that represents a book's genre
 * @returns A Promise or exception 
 */
async function getBooksByGenre(genre) {
  return Book.find({ genre });
}