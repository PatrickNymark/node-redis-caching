const Author = require('../models/Author');

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  searchAuthors
}

/**
 * Create author.
 * @param {Object} authorData a object that represents a book.
 * @returns A Promise or exception.
 */
async function createAuthor(authorData) {
  const author = new Author(authorData);

  return await author.save();
};

/** 
 * Get all authors.
 * @returns A Promise or exception.
 */
async function getAllAuthors() {
  return await Author.find();
};

/** 
 * Get author by id.
 * @returns A Promise or exception.
 */
async function getAuthorById(id) {
  return await Author.findById(id);
};

/**
 * Search authors
 * @param {Object} query express query object
 * @returns A Promise or exception.
 */
async function searchAuthors(query) {
  return await Author.find({ $or: 
    [
      { firstName: { '$regex': query.search, '$options': 'i' } }, 
      { lastName: { '$regex': query.search, '$options': 'i' } }
    ]
  });
}