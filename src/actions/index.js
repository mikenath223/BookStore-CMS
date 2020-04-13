
const ADD_BOOK = 'addBook'
const DEL_BOOK = 'delBook'
const CREATE_BOOK = (book) => {
  return {
    type: ADD_BOOK,
    book: book
  }
}

const REMOVE_BOOK = (book) => {
  return {
    type: DEL_BOOK,
    book: book
  }
}

export { CREATE_BOOK, REMOVE_BOOK, ADD_BOOK, DEL_BOOK }