import React, { Component } from 'react';
import BookListItems from '../book-list-items';

import './book-list';

class BookList extends Component {
  render() {
    const { books } = this.props;


    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItems book={book}/></li>
            )
          })
        }
      </ul>
    )
  }
};

export default BookList;