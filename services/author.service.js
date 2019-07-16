
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
 * @param {String} user represents an authorized user id
 * @returns A Promise or exception.
 */
async function getAllAuthors(user) {
  return await Author.find().cache({ key: user });
};

/** 
 * Get author by id.
 * @param {String} id represents an authors id
 * @param {String} user represents an authorized user id
 * @returns A Promise or exception.
 */
async function getAuthorById(id, user) {
  return await Author.findById(id).cache({ key: user });
};

/**
 * Search authors
 * @param {Object} query express query object
 * @param {String} user represents an authorized user id
 * @returns A Promise or exception.
 */
async function searchAuthors(query, user) {
  return await Author.find({ $or: 
    [
      { firstName: { '$regex': query.search, '$options': 'i' } }, 
      { lastName: { '$regex': query.search, '$options': 'i' } }
    ]
  }).cache({ key: user, expire: 10 });
}