import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

// Components

import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders} />
          <Redirect to="/Products" />
        </Switch>
      </div>
    );
  }
}

export default App; 
