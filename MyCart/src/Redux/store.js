import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducers

import { userReducers } from "./reducers/userReducers";
import { productReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";

const rootReducers = combineReducers({
  userReducers,
  productReducers,
  cartReducers,
  orderReducers
}); 
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
