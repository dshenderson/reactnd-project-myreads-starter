import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';

class SearchBooks extends Component {
  static propTypes = {
    library: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    books: [],
    value: ''
  }

  handleInput = e => {
    const val = e.target.value;
    this.setInputValue(val);
    this.searchBooks(val);
  }

  searchBooks = query => {
    if (query.length) {
      BooksAPI.search(query)
        .then((response) => {
          const respArray = Array.isArray(response) ? response : response.items;
          const books = respArray.map(resp => {
            const bookInLibrary = this.props.library.find(book => book.id === resp.id);
            resp.shelf = bookInLibrary ? bookInLibrary.shelf : 'none';
            return resp;
          });
          this.setState(currentState => ({books}));
        })
        .catch(error => {
          console.log({error});
        });
    } else {
      this.setState(currentState => ({books: []}));
    }
  }

  setInputValue = value => {
    this.setState(currentState => ({value}));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <label htmlFor="search-books" className="sr-only">Search database for books</label>
            <input
              id="search-books"
              type="text"
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.books} onUpdateBook={this.props.onUpdateBook}/>
        </div>
      </div>
    );
  }
};

export default SearchBooks;
