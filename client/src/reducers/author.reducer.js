import { authorConstants } from '../constants';

const initialState = {
    loading: false,
    authors: []
};

export function authors(state = initialState, action) {
    switch (action.type) {
      case authorConstants.SEARCH_REQUEST:
      case authorConstants.AUTHOR_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case authorConstants.SEARCH_SUCCESS:
      case authorConstants.AUTHOR_SUCCESS:
        return {
          ...state,
          loading: false,
          authors: action.authors,
        }
      case authorConstants.SEARCH_FAILURE:
      case authorConstants.AUTHOR_FAILURE:
        return {
          ...state,
          loading: false,
          errors: action.error
        }
      default:
          return state
    }
}

