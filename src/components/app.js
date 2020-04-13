import React from 'react'
import ReactDOM from 'react-dom'
import BooksList from '../containers/booksList'
import BooksForm from '../containers/booksForm'

class App extends React.Component {
  render() {
    return(
      <div>
        <BooksList />
        <BooksForm />
      </div>
    )
  }
}

export default App