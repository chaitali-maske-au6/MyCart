import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import OrderItem from "./orderItem";

class Orders extends Component {
  render() {
    return (
      <div
        className="Orders"
        style={{
          display: "flex",
          margin: "50px 100px 0",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }} 
      >
        {this.props.isLoggedIn ? (
          <>
            {this.props.products.length ? (
              <>
                <h2 style={{ color: "white", textAlign: "center" }}>
                  Your Orders
                </h2>
                {this.props.products.map(product => (
                  <OrderItem key={product._id} product={product} />
                ))}
              </>
            ) : (
              <h3 style={{ color: "white", textAlign: "center" }}>
                Your Orders are empty
              </h3>
            )}
          </>
        ) : (
          <h2 style={{ color: "white", textAlign: "center" }}>
            Please Register/Login to view Orders
          </h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: [...state.orderReducers.orders],
    isLoggedIn: Boolean(state.userReducers.user.isLoggedIn)
  };
};

export default connect(
  mapStateToProps,
  null
)(Orders);
