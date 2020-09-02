import React, { Component } from 'react';
import BookListItems from '../book-list-items';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();    
  };

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error) {
      return <ErrorIndicator />
    };

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItems book={book} /></li>
            )
          })
        }
      </ul>
    );
  };
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
