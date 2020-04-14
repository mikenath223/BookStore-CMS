
const ADD_BOOK = 'addBook';
const DEL_BOOK = 'delBook';
const CREATE_BOOK = book => ({
  type: ADD_BOOK,
  book,
});

const REMOVE_BOOK = book => ({
  type: DEL_BOOK,
  id: book.id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, ADD_BOOK, DEL_BOOK,
};
