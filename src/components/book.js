import React from 'react';
import PropTypes from 'prop-types';

const randPercent = () => Math.floor(Math.random() * 100);
const Book = ({ book, onClick }) => {
  const { bookId, title, category } = book;
  const getPercent = randPercent();
  return (
    <tr className="row mb-4 book-temp">
      <td className="col-4 "> <div className="book-element"> { category } <h3 className="book-head">{ 
        title }</h3> Book ID { bookId }</div> </td>
      <td className="col-4 d-flex justify-content-center align-items-center">
      <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart blue">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={getPercent+", 100"}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">{getPercent+'%'}</text>
    </svg>
  </div>
      </td>

      <td className="col-4 d-flex justify-content-center align-items-center">
        <button type="button" className="del-button" onClick={() => onClick(book)}>Remove Book</button>
      </td>
    </tr>
  );
};

Book.defaultProps = {
  book: {
    bookId: 1,
    title: 'Learning Redux',
    category: 'Learning',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Book;
