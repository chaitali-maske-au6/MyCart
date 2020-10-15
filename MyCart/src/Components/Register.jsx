import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { REGISTER } from "../Redux/actionCreators/userActions";
import "../styles/Register.css";

class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: ""
  }; 

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.history.push("/login");
    return this.props.REGISTER(this.state);
  };

  render() {
    return (
      <div className="box">
        <div className="login-suggestion">
          <p>Already Registered ? </p>
          <Link to="/login">Login</Link>
        </div>
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={this.handleOnSubmit}>
            <input
              onChange={this.handleOnChange}
              required
              type="text"
              name="userName"
              placeholder="Enter your name"
            />
            <input
              onChange={this.handleOnChange}
              required
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              onChange={this.handleOnChange}
              required
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ REGISTER }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Register);
