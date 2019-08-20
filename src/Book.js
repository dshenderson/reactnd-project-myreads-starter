import React from 'react';
import PropTypes from 'prop-types';
import BookAuthors from './BookAuthors';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {
  const {onUpdateBook, book, book: {authors = [], imageLinks, title}} = props;

  return (
    <li>
      <div className="book" >
        <div className="book-top">
          <div
            className="book-cover"
            style={imageLinks ? {backgroundImage: `url(${imageLinks.thumbnail})`} : {}}
            aria-hidden="true"
          ></div>
          <BookShelfChanger book={book} onUpdateBook={onUpdateBook}/>
        </div>
        <dl className="book-details">
          <dt>Book title</dt>
          <dd className="book-title">{title}</dd>
          <dt>Book author(s)</dt>
          <dd className="book-authors">
            <BookAuthors authors={authors}/>
          </dd>
        </dl>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Book;
