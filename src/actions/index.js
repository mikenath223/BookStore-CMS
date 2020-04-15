
const randId = () => Math.floor(Math.random() * 1000);

const ADD_BOOK = 'addBook';
const DEL_BOOK = 'delBook';
const CREATE_BOOK = book => ({
  type: ADD_BOOK,
  book: {
    bookId: randId(),
    title: book.title,
    category: book.category
  },
});

const REMOVE_BOOK = book => ({
  type: DEL_BOOK,
  book
});

export {
  CREATE_BOOK, REMOVE_BOOK, ADD_BOOK, DEL_BOOK, randId
};
