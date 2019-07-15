import axios from 'axios';

export const authorService = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    searchAuthors
};

/**
 * Create author
 * @param {Object} authorData 
 */
function createAuthor(authorData) {    
  return axios.post('/api/authors', authorData).then(response => {
    return response.data
  });
}

/**
 * Get all authors
 */
function getAllAuthors() {    
  return axios.get('/api/authors').then(response => {
    return response.data
  });
}

/**
 * Get author by id
 * @param {String} id represents a authors id
 */
function getAuthorById(id) {
  return axios.get(`/api/books/${id}`).then(response => {
    return response.data
  })
}

/**
 * Search authors
 * @param {String} query a string representing search value
 */
function searchAuthors(query) {    
  return axios.get(`/api/authors/query?search=${query}`).then(response => {
    return response.data
  });
}
