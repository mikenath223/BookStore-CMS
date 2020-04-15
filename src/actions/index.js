
const randId = () => Math.floor(Math.random() * 1000);

const ADD_BOOK = 'addBook';
const DEL_BOOK = 'delBook';
const FILTER_BOOK = 'filterBook';

const CREATE_BOOK = book => ({
  type: ADD_BOOK,
  book: {
    bookId: randId(),
    title: book.title,
    category: book.category,
  },
});

const REMOVE_BOOK = book => ({
  type: DEL_BOOK,
  book,
});

const CHANGE_FILTER = category => ({
  type: FILTER_BOOK,
  category
})

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, ADD_BOOK, DEL_BOOK, FILTER_BOOK, randId,
};
