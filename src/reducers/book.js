import { ADD_BOOK, DEL_BOOK } from '../actions/index';


const bookReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case DEL_BOOK:
      return [
        ...state,
      ].filter(bk => bk !== action.book);
    default:
      return state;
  }
};


export default bookReducer;
