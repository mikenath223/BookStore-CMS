import React from 'react';

const Book = (props) => {
  const { bookId, title, category } = props.book;

  return (
      <tr>
        <td>{bookId}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
  )
}

export default Book; 