import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksGrid = (props) => {
  const {books, onUpdateBook} = props;

  return books.length ? (
    <ul className="books-grid">
      {books.map(book => (
        <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>
      ))}
    </ul>
  ) : (
    <p className="no-books">No books found yet.</p>
  );
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BooksGrid;
