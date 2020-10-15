import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.product.imgUrl} alt="" />
        <p>
          <b>Title : </b>
          {this.props.product.title}
        </p>
        <p>
          <b>Category : </b>
          {this.props.product.category} 
        </p>
        <p>
          <b>Rating : </b>
          {this.props.product.ratings}
        </p>
        <p>
          <b>Price : </b>
          {this.props.product.price}
        </p>
        <button
          onClick={() => {
            if (!this.props.isLoggedIn) {
              return alert("Register/LogIn to add product to cart");
            }
            return this.props.ADD_TO_CART(this.props.product);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: Boolean(state.userReducers.user.isLoggedIn)
});

export default connect(
  mapStateToProps,
  null
)(Card);
