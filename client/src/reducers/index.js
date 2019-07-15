import { combineReducers } from 'redux';

import { authentication } from '../reducers/auth.reducer';
import { books } from '../reducers/book.reducer';
import { authors } from '../reducers/author.reducer';



export default combineReducers({
  authentication,
  books,
  authors
});
