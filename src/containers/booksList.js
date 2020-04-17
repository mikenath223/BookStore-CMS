import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from './category_filter';

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
  filterBook: category => {
    dispatch(CHANGE_FILTER(category));
  },
});

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilterChange(e) {
    const { filterBook } = this.props;
    filterBook(e.target.value);
  }

  filterBooks() {
    const { books, filter } = this.props;
    if (filter !== '') {
      return [...books].filter(book => book.category === filter);
    }
    return books;
  }

  render() {
    const library = this.filterBooks();
    return (
      <div className="container-fluid book-table mt-5">
        <CategoryFilter onClick={this.handleFilterChange} />
        <table className="row">
          <tbody className="container-fluid">
            {library.map(book => (
              <Book
                key={book.title}
                book={
                  book
                }
                onClick={this.handleRemoveBook}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.defaultProps = {
  books: [
    {
      bookId: 1,
      title: 'Learning Redux',
      category: 'Learning',
    },
  ],
  filter: '',
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
