import { combineReducers } from 'redux';

import { authentication } from '../reducers/auth.reducer';
import { books } from '../reducers/book.reducer';


export default combineReducers({
  authentication,
  books
});
