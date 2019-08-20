import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({books}));
      });
  }

  reshelveBook = (libro, shelf) => {
    BooksAPI.update(libro, shelf)
      .then(() => {
        this.setState(prevState => ({
          books: prevState.books.map(book => {
            if (book.id === libro.id) {
              book.shelf = shelf;
            }

            return book;
          })
        }));
      });
  }

  render() {
    return (
      <div className="list-books">
        <h1 className="page-title">MyReads</h1>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdateBook={this.reshelveBook} />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks library={this.state.books} onUpdateBook={this.reshelveBook} />
        )}/>
      </div>
    );
  }
}

export default BooksApp;
