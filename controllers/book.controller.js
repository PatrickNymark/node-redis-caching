const express = require('express');
const router = express.Router();
const bookService = require('../services/book.service');
const authorize = require('../helpers/authentication');
const clearCache = require('../helpers/clearCache');

router.post('/', authorize(), clearCache, createBook);
router.post('/:id', authorize(), deleteBook);
router.get('/', getAllBooks);
router.get('/query', searchBooks);
router.get('/:id', getBookById);
//router.get('/', postService.getAll);

module.exports = router;

function createBook(req, res, next) {
  bookService.createBook(req.body)
    .then(book => res.json(book))
    .catch(err => next(err))
}

function deleteBook(req, res, next) {
  bookService.deleteBook(req.params.id)
    .then(book => res.json(book))
    .catch(err => next(err))
}


function getAllBooks(req, res, next) {
  bookService.getAllBooks()
    .then(books => res.json(books))
    .catch(err => next(err))
}

function searchBooks(req, res, next) {
  bookService.searchBooks(req.query)
    .then(books => res.json(books))
    .catch(err => next(err))
}

function getBookById(req, res, next) {
  bookService.getBookById(req.params.id)
    .then(books => res.json(books))
    .catch(err => next(err))
}

module.exports = router; 