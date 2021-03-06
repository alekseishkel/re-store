const addCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ];
  };

  if (index === -1) {
    return [
      ...cartItems,
      item
    ];
  };

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ];
};

const changeCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  }
};

const updateTotalOrder = (orderTotal, book, quantity) => {
  console.log(orderTotal)
  orderTotal = orderTotal + quantity * book.price;
  return orderTotal;
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems, orderTotal } } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = changeCartItem(book, item, quantity);
  const totalOrder = updateTotalOrder(orderTotal, book, quantity);

  return {
    orderTotal: totalOrder,
    cartItems: addCartItems(cartItems, newItem, itemIndex)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  };

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      console.log(state)
      return updateOrder(state, action.payload, 1);

    case 'BOOK_DECREASED_IN_CART':
      return updateOrder(state, action.payload, -1);

    case 'BOOK_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
}

export default updateShoppingCart;