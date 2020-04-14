import { combineReducers } from 'redux';
import bookReducer from './book';

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
