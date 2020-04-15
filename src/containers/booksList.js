import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const BooksList = ({ books }) => {
  const library = books.books;
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
          { library.map(book => <Book key={book.title} book={book} />) }
        </tbody>
      </table>
    </div>
  );
};

BooksList.defaultProps = {
  books: [
    {
      bookId: 1,
      title: 'Learning Redux',
      category: 'Learning',
    },
  ],
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array),
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
