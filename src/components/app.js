import React from 'react';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

const App = () => (
  <main>
    <BooksForm />
    <BooksList />
  </main>
);

export default App;
