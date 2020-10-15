import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LOGOUT } from "../Redux/actionCreators/userActions";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return ( 
      <nav>
        <Link to="/products">
          <h2>E-Commerce</h2>
        </Link>
        <div className="links">
          <Link to="/products">Products</Link>
          {console.log(this.props.cartNumber)}
          <Link to="/cart">
            Cart
            {this.props.cartNumber !== 0 && (
              <span className="cart-icon">{this.props.cartNumber}</span>
            )}
          </Link>
          <Link to="/orders">Orders</Link>
          {!this.props.user.isLoggedIn ? (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              <p>Hi {this.props.user.userName}</p>
              <button onClick={() => this.props.LOGOUT()}>Logout</button>
            </>
          )}
        </div>
      </nav>
    );
  }
  1;
}

const mapStateToProps = state => ({
  user: {
    ...state.userReducers.user
  },
  cartNumber: state.cartReducers.cart.length
});
const mapDispatchToProps = dispatch => bindActionCreators({ LOGOUT }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
