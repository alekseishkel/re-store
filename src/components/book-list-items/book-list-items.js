import React, { Fragment } from 'react';

import './book-list-items.css';

const BookListItems = ({ book }) => {
  const { author, title, price, imageCover } = book;

  return (
    <Fragment>
      <div className="book-list-item">
        <div className="book-cover">
          <img src={imageCover} alt="cover" />
        </div>
        <div className="book-details">
          <a href="#" className="book-title">{title}</a>
          <div className="book-author">{author}</div>
          <div className="book-price">{price}</div>
          <button className="btn btn-info add-to-cart">Add to cart</button>
        </div>

      </div>
    </Fragment>
  );
};

export default BookListItems;