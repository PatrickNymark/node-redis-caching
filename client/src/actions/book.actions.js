import { bookConstants } from '../constants';
import { bookService } from '../services';

export const bookActions = {
    searchBooks,
    getAllBooks
};

function getAllBooks() {
    return dispatch => {
        dispatch(request());

        bookService.getAllBooks()
            .then(books => { 
                dispatch(success(books));
            }).catch(err => {
                const { message } = err.response.data;
                dispatch(failure(message))
            })
    };  

    function request() { return { type: bookConstants.BOOKS_REQUEST } }
    function success(books) { return { type: bookConstants.BOOKS_SUCCESS, books } }
    function failure(error) { return { type: bookConstants.BOOKS_FAILURE, error } }
}

function searchBooks(query) {
  return dispatch => {
        dispatch(request({ query }));

        bookService.searchBooks(query)
            .then(books => { 
                dispatch(success(books));
            }).catch(err => {
                const { message } = err.response.data;
                dispatch(failure(message))
            })
    };  

    function request(query) { return { type: bookConstants.SEARCH_REQUEST, query } }
    function success(books) { return { type: bookConstants.SEARCH_SUCCESS, books } }
    function failure(error) { return { type: bookConstants.SEARCH_FAILURE, error } }
}
