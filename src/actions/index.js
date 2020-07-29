const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    action: newBooks
  };
};

export {
  booksLoaded
};

