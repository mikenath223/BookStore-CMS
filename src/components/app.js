import React from 'react';
import BooksList from '../containers/booksList';
import BookForm from '../containers/booksForm';

const App = () => (
  <div className="container">
    <nav>
      <h4>LibTriXx</h4>
    </nav>
    <BooksList />
    <BookForm />
  </div>
);

export default App;
