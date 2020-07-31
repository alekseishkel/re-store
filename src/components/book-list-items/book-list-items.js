import React, { Fragment } from 'react';

import './book-list-items.css';

const BookListItems = ({ book }) => {
  const { author, title } = book;

  return (
    <Fragment>
      <span>{author}</span>
      <span>{title}</span>
    </Fragment>
  );
};

export default BookListItems;