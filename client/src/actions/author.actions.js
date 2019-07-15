import { authorConstants } from '../constants';
import { authorService } from '../services';

export const authorActions = {
    getAllAuthors
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





