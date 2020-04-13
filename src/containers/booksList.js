import React from 'react'
import Book from '../components/book'

class BooksList extends React.Component {
  render() {
    return(
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

          <Book book={''}/>
            <Book book={''}/>
            <Book book={''}/>
            <Book book={''}/>
            <Book book={''}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default BooksList;