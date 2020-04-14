import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

// container component
const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
});

const mapStateToProps = state => ({
  books: state,
});

const BooksList = (props) => {
  const { books } = props.books
 
  return (
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
          { books.map(book => <Book key={book.title} book={book} />) }
        </tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
