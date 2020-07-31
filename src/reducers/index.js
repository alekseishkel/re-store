const inititalState = {
  books: [
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
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  };
};

export default reducer;