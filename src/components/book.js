import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId, title, category }) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.defaultProps = {
  bookId: 1,
  title: 'Learning Redux',
  category: 'Learning',
};

Book.propTypes = {
  bookId: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Book;
