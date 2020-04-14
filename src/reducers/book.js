import { ADD_BOOK, DEL_BOOK } from '../actions/index';

const randId = () => Math.floor(Math.random() * 1000);
const defaultState = [
  {
    bookId: randId(),
    title: 'First book',
    category: 'Action',
  },
  {
    bookId: randId(),
    title: 'Learning React',
    category: 'Learning',
  },
  {
    bookId: randId(),
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
