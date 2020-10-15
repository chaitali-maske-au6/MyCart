const orderState = {
  orders: []
};

const orderReducers = (state = orderState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case "CHECKOUT":
      const order = action.payload;
      stateCopy.orders.push(...order);
      return stateCopy;
    default:
      return state;
  }
};

export { orderReducers }; 
