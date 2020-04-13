import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux';
import { CREATE_BOOK, REMOVE_BOOK } from './actions/index'
import bookReducer from './reducers/book'

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch(CREATE_BOOK(book))
    },
    removeBook: (book) => {
      dispatch(REMOVE_BOOK(book))
    }
  }
}


const store = createStore(bookReducer);

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'))