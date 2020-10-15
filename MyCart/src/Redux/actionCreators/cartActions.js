const ADD_TO_CART = product => ({ type: "ADD_TO_CART", payload: product });
const REMOVE_FROM_CART = productId => ({
  type: "REMOVE_FROM_CART",
  payload: productId
});
const ADD_QUANTITY = productId => ({
  type: "ADD_QUANTITY",
  payload: productId
});
const REMOVE_QUANTITY = productId => ({
  type: "REMOVE_QUANTITY",
  payload: productId
});

export { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY };
 