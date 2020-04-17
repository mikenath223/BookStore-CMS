import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import rootReducer from './reducers/index';
import { randId } from './actions/index';
import './styles/reset.css'
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultState = [
  {
    bookId: randId(),
    title: 'Little Fires Everywhere',
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


const store = createStore(rootReducer, {
  books: defaultState,
  filter: '',
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
