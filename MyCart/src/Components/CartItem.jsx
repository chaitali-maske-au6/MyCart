import React, { Component } from "react";
import { connect } from "react-redux";
import {
  REMOVE_FROM_CART,
  REMOVE_QUANTITY,
  ADD_QUANTITY
} from "../Redux/actionCreators/cartActions";
import { CHECKOUT } from "../Redux/actionCreators/orderActions";

import "../styles/CartItem.css";

import { bindActionCreators } from "redux";

class CartItem extends Component { 
  render() {
    return (
      <div className="CartItem">
        <img src={this.props.product.imgUrl} alt="" />
        <p>
          <b>Title : </b>
          {this.props.product.title}
        </p>
        <p>
          <b>Price : </b>
          {this.props.product.price}
        </p>
        <span>
          <input
            type="button"
            value="-"
            onClick={() => this.props.REMOVE_QUANTITY(this.props.product._id)}
          />
          <span>{this.props.product.quantity}</span>
          <input
            type="button"
            value="+"
            onClick={() => this.props.ADD_QUANTITY(this.props.product._id)}
          />
        </span>
        <span>
          <b>Total = </b>
          {"₹"}
          {Number(this.props.product.price.replace("₹", "")) *
            Number(this.props.product.quantity).toFixed(2)}
        </span>
        <button
          onClick={() => this.props.REMOVE_FROM_CART(this.props.product._id)}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ all: { ...state } });

const mapDispatchToProps = disptch =>
  bindActionCreators(
    { ADD_QUANTITY, REMOVE_FROM_CART, REMOVE_QUANTITY, CHECKOUT },
    disptch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
