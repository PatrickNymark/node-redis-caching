import { bookConstants } from '../constants';

const initialState = {
    loading: false,
    books: []
};

export function books(state = initialState, action) {
    switch (action.type) {
      case bookConstants.BOOKS_REQUEST:
      case bookConstants.SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case bookConstants.BOOKS_SUCCESS:
      case bookConstants.SEARCH_SUCCESS:
        return {
          ...state,
          loading: false,
          books: action.books,
        }
      case bookConstants.BOOKS_FAILURE:
      case bookConstants.SEARCH_FAILURE:
        return {
          ...state,
          loading: false,
          errors: action.error
        }
      default:
          return state
    }
}


