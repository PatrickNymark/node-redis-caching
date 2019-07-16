import axios from 'axios';

export const bookService = {
    createBook,
    getAllBooks,
    getBookById,
    searchBooks
};

/**
 * Create book
 * @param {Object} bookData 
 */
function createBook(bookData) {    
  return axios.post('/api/books', bookData).then(response => {
    return response.data
  });
}

/**
 * Get all books
 */
function getAllBooks() {    
  return axios.get(`/api/books`).then(response => {
    return response.data
  });
}

/**
 * Get book by id
 */
function getBookById(id) {    
  return axios.get(`/api/books/${id}`).then(response => {
    return response.data
  });
}

/**
 * Search books
 * @param {String} query represents search value
 */
function searchBooks(query) {    
  return axios.get(`/api/books/query?search=${query}`).then(response => {
    return response.data
  });
}
