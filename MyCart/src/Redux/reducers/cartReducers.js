const cartState = {
  cart: [],
  cartValue: 0
}; 

const cartReducers = (state = cartState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case "ADD_TO_CART":
      var product = action.payload;

      stateCopy.cart.forEach(ele => {
        if (ele._id === product._id) {
          alert("already added to cart");
          return stateCopy;
        }
      });
      stateCopy.cartValue =
        Number(product.price.replace("₹", "")) + stateCopy.cartValue;
      alert("Added to cart");
      stateCopy.cart.push(product);

      return stateCopy;

    case "REMOVE_FROM_CART":
      var productId = action.payload;
      product = stateCopy.cart.find(ele=>ele._id === productId)
      stateCopy.cart = stateCopy.cart.filter(
        prod => prod._id !== productId
      );
      stateCopy.cartValue =
        stateCopy.cartValue - Number(product.price.replace("₹", ""));
      return stateCopy;

    case "ADD_QUANTITY":
      productId = action.payload;
      var obj = stateCopy.cart.find(obj => obj._id === productId);
      obj.quantity = obj.quantity + 1;
      stateCopy.cartValue =
        Number(obj.price.replace("₹", "")) + stateCopy.cartValue;
      return stateCopy;

    case "REMOVE_QUANTITY":
      productId = action.payload;
      obj = stateCopy.cart.find(obj => obj._id === productId);
      if (obj.quantity === 0) return stateCopy;
      stateCopy.cartValue =
        stateCopy.cartValue - Number(obj.price.replace("₹", ""));
      obj.quantity = obj.quantity - 1;
      if (stateCopy.cartValue < 5) stateCopy.cartValue = 0;
      return stateCopy;

    case "CHECKOUT":
      stateCopy.cart = [];
      stateCopy.cartValue = 0;
      alert("you have successfully placed your order(Check Orders)");
      return stateCopy;
    default:
      return state;
  }
};

export { cartReducers };
