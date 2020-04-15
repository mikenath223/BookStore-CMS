import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVE_BOOK } from '../actions/index';

// container component
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
});

const mapStateToProps = state => ({
  books: state,
});

class BooksList extends React.Component{
  constructor(props){
    super(props)
    
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
  }
  
  handleRemoveBook(book) {
    this.props.removeBook(book)
  }

  render(){
    const {books, removeBook} = this.props
    const library = books.books;
    return (
      <div>
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
            { library.map(book => <Book key={book.title} book={book} onClick={this.handleRemoveBook} />) }
          </tbody>
        </table>
      </div>
    );
  };
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
  books: PropTypes.objectOf(PropTypes.array),
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
