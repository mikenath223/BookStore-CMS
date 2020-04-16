import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from './category_filter'

// container component
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
  filter_book: category => {
    dispatch(CHANGE_FILTER(category))
  }
});

const mapStateToProps = (state) => ({
  books: state['books'],
  filter: state['filter']
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
    const { filter_book } = this.props;
    filter_book(e.target.value)
  }
  
  filterBooks() {
    const { books, filter } = this.props
    if(filter.filter != 'ALL'){
      return [...books].filter(book => book.category === filter.filter)
    }
    return books
  }

  render() {
    const library = this.filterBooks();
    return (
      <div>
      <CategoryFilter onClick={this.handleFilterChange}/>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
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
};

BooksList.propTypes = {
  // books: PropTypes.objectOf(PropTypes.array),
  removeBook: PropTypes.func.isRequired,
  filter_book: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
