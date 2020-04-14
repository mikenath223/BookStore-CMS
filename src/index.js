import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import { mapDispatchToProps } from './containers/booksList';
import rootReducer from './reducers/index';


const randId = () => Math.floor(Math.random() * 1000);
const defaultState = [
  {
    bookId: randId(),
    title: 'First book',
    category: 'Action',
  },
  {
    bookId: randId(),
    title: 'Learning React',
    category: 'Learning',
  },
  {
    bookId: randId(),
    title: 'It chapter 2',
    category: 'Horror',
  },
];

const mapStateToProps = (state = defaultState) => ({
  books: state,
});

const store = createStore(rootReducer);
connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
