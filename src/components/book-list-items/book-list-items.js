import React, { Fragment } from 'react';

import './book-list-items.css';

const BookListItems = ({ book }) => {
  const { autor, title } = book;

  return (
    <Fragment>
      <span>{autor}</span>
      <span>{title}</span>
    </Fragment>
  );
};

export default BookListItems;