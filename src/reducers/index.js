import { combineReducers } from 'redux';
import bookReducer from './book';
import filter from './filter'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filter
});

export default rootReducer;
