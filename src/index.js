import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import { CREATE_BOOK, REMOVE_BOOK } from './actions/index';
import rootReducer from './reducers/index';

const mapStateToProps = state => ({
  books: state,
});

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
  removeBook: book => {
    dispatch(REMOVE_BOOK(book));
  },
});


const store = createStore(rootReducer);
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
);
