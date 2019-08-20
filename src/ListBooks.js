import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const ListBooks = props => {
  const shelves = [
    {
      id: 'currentlyReading',
      name: 'Currently Reading'
    },
    {
      id: 'read',
      name: 'Read'
    },
    {
      id: 'wantToRead',
      name: 'Want to Read'
    }
  ];

  const {books, onUpdateBook} = props;

  return (
    <div>
      <div className="list-books-content">
        {shelves.map(shelf => (
          <BookShelf
            key={shelf.id}
            category={shelf.name}
            books={books.filter(book => book.shelf === shelf.id)}
            onUpdateBook={onUpdateBook}
          />
        ))}
      </div>
      <Link to="/search" className="open-search">Add a book</Link>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default ListBooks;
