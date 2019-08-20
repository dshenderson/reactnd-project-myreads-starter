import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = (props) => {
  const {authors} = props;
  const numOfAuthors = authors.length;

  if (!numOfAuthors) {
    return 'Author(s) unknown';
  }

  if (numOfAuthors === 1) {
    return authors[0];
  }

  return (
    <ul>
      {authors.map(author => (
        <li key={author}>{author}</li>
      ))}
    </ul>
  );
};

BookAuthors.propTypes = {
  authors: PropTypes.array.isRequired
};

export default BookAuthors;
