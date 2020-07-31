import React, { Component } from 'react';
import BookListItems from '../book-list-items';
import { connect } from 'react-redux';

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
    );
  };
};

const mapStateToProps = ({ books }) => {
  return {
    books
  }
}

export default connect(mapStateToProps)(BookList);