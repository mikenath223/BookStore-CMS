import { ADD_BOOK, DEL_BOOK } from '../actions/index';

const defaultState = [
  {
    bookId: Math.floor(Math.random() * 10),
    title: 'First book',
    category: 'Action',
  },
  {
    bookId: Math.floor(Math.random() * 10),
    title: 'Learning React',
    category: 'Learning',
  },
  {
    bookId: Math.floor(Math.random() * 10),
    title: 'It chapter 2',
    category: 'Horror',
  },
];

const bookReducer = (state = defaultState, action) => {
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
