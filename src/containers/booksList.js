import React from 'react';
import Book from '../components/book';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
});


const BooksList = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>

        <Book book="" />
        <Book book="" />
        <Book book="" />
        <Book book="" />
        <Book book="" />
      </tbody>
    </table>
  </div>
);

export { BooksList, mapDispatchToProps };
