import React from 'react';
import BooksList from '../containers/booksList';
import BookForm from '../containers/booksForm';

const App = () => (
  <div>
    <nav>
      <h4>LibTriXx</h4>
    </nav>
    <BookForm />
    <BooksList />
  </div>
);

export default App;
