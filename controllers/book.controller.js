const express = require('express');
const router = express.Router();
const bookService = require('../services/book.service');
const authorize = require('../helpers/authentication');

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/', authorize(), getBooksByGenre);
router.get('/', getBooksByPages);
//router.get('/', postService.getAll);

module.exports = router;

function createBook(req, res, next) {
  bookService.createBook(req.body)
    .then(book => res.json(book))
    .catch(err => next(err))
}

function getBooksByGenre(req, res, next) {
  bookService.getBooksByGenre(req.query.genre, req.user)
    .then(books => res.json(books))
    .catch(err => next(err)) 
}

function getAllBooks(req, res, next) {
  bookService.getAllBooks()
    .then(books => res.json(books))
    .catch(err => next(err))
}

function getBooksByPages(req, res, next) {
  bookService.getBooksByPages(req.query.pages)
    .then(books => res.json(books))
    .catch(err => next(err))
}

module.exports = router; 