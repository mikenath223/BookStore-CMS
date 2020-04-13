import React from 'react'

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
            <tr>
              <td>John Lennon</td>
              <td>Rhythm Guitar</td>
              <td></td>
            </tr>
            <tr>
              <td>Paul McCartney</td>
              <td>Bass</td>
              <td></td>
            </tr>
            <tr>
              <td>George Harrison</td>
              <td>Lead Guitar</td>
              <td>Lead Guitar</td>
            </tr>
            <tr>
              <td>Ringo Starr</td>
              <td>Drums</td>
              <td>Lead Guitar</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}