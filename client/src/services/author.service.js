import axios from 'axios';

export const authorService = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    searchAuthors,
    deleteAuthor
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
 * Delete author
 * @param {String} id a string that represents a author's id 
 */
function deleteAuthor(id) {    
  return axios.post(`/api/authors/${id}`).then(response => {
    return response.data
  });
}

/**
 * Get all authors
 */
function getAllAuthors(onlyName) {    
  return axios.get('/api/authors').then(response => {
    // this is mainly used in case of a select author option
    if(onlyName) {
      const authorArray = [];
      response.data.forEach(author => {
        const newAuthor = {
          id: author._id,
          name: author.firstName + " " + author.lastName
        }

        authorArray.push(newAuthor);
      })

      return authorArray;
    }
    return response.data
  });
}

/**
 * Get author by id
 * @param {String} id represents a authors id
 */
function getAuthorById(id) {
  return axios.get(`/api/authors/${id}`).then(response => {
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
