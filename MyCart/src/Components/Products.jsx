import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../Redux/actionCreators/cartActions";
import "../styles/Products.css";
// Components

import Card from "./Card";
class Products extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map(product => (
          <Card
            key={product._id}
            product={product}
            ADD_TO_CART={this.props.ADD_TO_CART}
          /> 
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: [...state.productReducers.products]
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ADD_TO_CART }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
