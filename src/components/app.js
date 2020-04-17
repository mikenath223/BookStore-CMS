import React from 'react';
import BooksList from '../containers/booksList';
import BookForm from '../containers/booksForm';
import avatar from '../styles/icons8-user-30.png' 

const App = () => (
  <div className="container main-container">
    <nav className="row pt-3 bg-white head-elem">
      <ul className="nav col-6">
        <li className="nav-item">
          <a className="nav-link active logo mt-2" href="#"><h2>LibTrixx CMS</h2></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mt-3 text-dark" href="#">Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mt-3 text-dark" href="#">Categories</a>
        </li>
      </ul>
      <div className="col-6 pt-2">
        <img src={avatar} className="mt-2 float-right avatar"/>
      </div>
    </nav>
    <BooksList />
    <BookForm />
  </div>
);

export default App;
