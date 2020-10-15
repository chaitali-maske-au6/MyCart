import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LOGIN } from "../Redux/actionCreators/userActions";
import "../styles/Login.css";

class Login extends Component {
  state = {
    email: "", 
    password: "",
    history: this.props.history
  };

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  handleOnSubmit = e => {
    e.preventDefault();
    return this.props.LOGIN(this.state);
  };

  render() {
    return (
      <div className="box">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={this.handleOnSubmit}>
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
            <input type="submit" value="Login" />
          </form>
        </div>
        <div className="register-suggestion">
          <p>Dont't have an account ? </p>
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ LOGIN }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
