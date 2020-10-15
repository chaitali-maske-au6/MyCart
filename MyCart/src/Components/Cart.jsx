import React, { Component } from "react";
import { connect } from "react-redux";
import { CHECKOUT } from "../Redux/actionCreators/orderActions";
import "../styles/Cart.css";
// Components

import CartItem from "./CartItem";
import { bindActionCreators } from "redux";

class Cart extends Component {
  render() {
    return (
      <div className="Cart"> 
        {this.props.isLoggedIn ? (
          <>
            {this.props.products.length ? (
              <>
                {this.props.products.map(product => (
                  <CartItem key={product._id} product={product} />
                ))}
                <div className="total-cart">
                  <h2>
                    <b>Total Cart Value : </b>
                    {"₹" + Number(this.props.cartValue).toFixed(2)}
                  </h2>
                </div>
                <button
                  className="checkout"
                  onClick={() => this.props.CHECKOUT(this.props.products)}
                >
                  Checkout
                </button>
              </>
            ) : (
              <h3 style={{ color: "white", textAlign: "center" }}>
                Your cart is empty
              </h3>
            )}
          </>
        ) : (
          <h2 style={{ color: "white", textAlign: "center" }}>
            Please Register/Login to view Cart
          </h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: [...state.cartReducers.cart],
    cartValue: String(state.cartReducers.cartValue),
    state: state,
    isLoggedIn: Boolean(state.userReducers.user.isLoggedIn)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ CHECKOUT }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
