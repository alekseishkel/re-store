import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      author: 'James',
      title: 'My Book'
    },
    {
      id: 2,
      author: 'Arthur',
      title: 'My Biography'
    }
  ]
  
  return <BookList books={books} />
};

export default HomePage;