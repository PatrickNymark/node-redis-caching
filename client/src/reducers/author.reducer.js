import { authorConstants } from '../constants';

const initialState = {
    loading: false,
    authors: []
};

export function authors(state = initialState, action) {
    switch (action.type) {
      case authorConstants.AUTHOR_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case authorConstants.AUTHOR_SUCCESS:
        return {
          ...state,
          loading: false,
          authors: action.authors,
        }
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

