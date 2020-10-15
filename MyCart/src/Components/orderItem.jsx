import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <div 
        className="OrderItem"
        style={{
          color: "white",
          textAlign: "center",
          height: "350px",
          width: "200px",
          marginTop:"25px",
          border: "1px solid white"
        }}
      >
        <img
          src={this.props.product.imgUrl}
          alt=""
          style={{ height: "200px", width: "200px" }}
        />
        <p style={{ margin: "10px" }}>
          <b>Title : </b>
          {this.props.product.title}
        </p>
        <p style={{ margin: "10px" }}>
          <b>Category : </b>
          {this.props.product.category}
        </p>
        <p style={{ margin: "10px" }}>
          <b>Price : </b>
          {this.props.product.price}
        </p>
        <p style={{ margin: "10px" }}>
          <b>Quantity : </b>
          {this.props.product.quantity}
        </p>
        <p style={{ margin: "10px" }}>
          <b>Total price : </b>
          {"₹"}
          {Number(this.props.product.quantity) *
            Number(this.props.product.price.replace("₹", ""))}
        </p>
      </div>
    );
  }
}

export default OrderItem;
/*
style={{margin:"10px"}}
*/
