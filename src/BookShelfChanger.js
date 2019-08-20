import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = (props) => {
  const {book, onUpdateBook, book: {id: bookId, shelf = 'none'}} = props;

  const updateBook = (e) => {
    const shelf = e.target.value;
    onUpdateBook(book, shelf);
  };

  return (
    <div className="book-shelf-changer">
      <label htmlFor={`change-${bookId}`} className="sr-only">Change book's shelf or remove</label>
      <select id={`change-${bookId}`} value={shelf} onChange={updateBook}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default BookShelfChanger;
