import React, { Component } from 'react';
import BookListItems from '../book-list-items';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItems 
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          )
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();    
  };

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error) {
      return <ErrorIndicator />
    };

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  };
};

const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (bookId) => dispatch(bookAddedToCart(bookId))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
