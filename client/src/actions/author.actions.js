import { authorConstants } from '../constants';
import { authorService } from '../services';

export const authorActions = {
    getAllAuthors,
    searchAuthors
};

function getAllAuthors() {
    return dispatch => {
        dispatch(request());

        authorService.getAllAuthors()
            .then(authors => { 
                dispatch(success(authors));
            }).catch(err => {
                const { message } = err.response.data;
                dispatch(failure(message))
            })
    };  

    function request() { return { type: authorConstants.AUTHOR_REQUEST } }
    function success(authors) { return { type: authorConstants.AUTHOR_SUCCESS, authors } }
    function failure(error) { return { type: authorConstants.AUTHOR_FAILURE, error } }
}

function searchAuthors(query) {
    return dispatch => {
          dispatch(request({ query }));
  
          authorService.searchAuthors(query)
              .then(authors => { 
                  dispatch(success(authors));
              }).catch(err => {
                  const { message } = err.response.data;
                  dispatch(failure(message))
              })
      };  
  
      function request(query) { return { type: authorConstants.SEARCH_REQUEST, query } }
      function success(authors) { return { type: authorConstants.SEARCH_SUCCESS, authors } }
      function failure(error) { return { type: authorConstants.SEARCH_FAILURE, error } }
  }
  




