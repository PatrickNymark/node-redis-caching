const express = require('express');
const router = express.Router();
const authorService = require('../services/author.service');
const authorize = require('../helpers/authentication');
const clearCache = require('../helpers/clearCache');

router.post('/', authorize(), clearCache, createAuthor);
router.post('/:id', authorize(), clearCache, deleteAuthor)
router.get('/', authorize(), getAllAuthors);
router.get('/query', authorize(), searchAuthors);
router.get('/:id', authorize(), getAuthorById);

module.exports = router;

function createAuthor(req, res, next) {
  authorService.createAuthor(req.body)
    .then(author => res.json(author))
    .catch(err => next(err))
}

function deleteAuthor(req, res, next) {
  authorService.deleteAuthor(req.params.id)
    .then(author => res.json(author))
    .catch(err => next(err))
}

function getAllAuthors(req, res, next) {
  authorService.getAllAuthors(req.user.sub)
    .then(authors => res.json(authors))
    .catch(err => next(err))
}

function getAuthorById(req, res, next) {
  authorService.getAuthorById(req.params.id, req.user.sub)
    .then(author => res.json(author))
    .catch(err => next(err))
}

function searchAuthors(req, res, next) {
  authorService.searchAuthors(req.query, req.user.sub)
    .then(author => res.json(author))
    .catch(err => next(err))
}

module.exports = router; 