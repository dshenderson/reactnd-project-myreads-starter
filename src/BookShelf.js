import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const BookShelf = (props) => {
  const {books, category, onUpdateBook} = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <BooksGrid books={books} onUpdateBook={onUpdateBook}/>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BookShelf;
