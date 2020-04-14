import React from 'react';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

const App = () => (
  <div>
    <nav>
      <h4>LibTriXx</h4>
    </nav>
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
