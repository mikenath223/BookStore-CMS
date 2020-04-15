import { combineReducers } from 'redux';
import bookReducer from './book';
import filterCategory from './filter'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterCategory
});

export default rootReducer;
