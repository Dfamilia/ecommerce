/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

import "./styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            required
            type="email"
            label="Email"
            value={email}
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            required
            type="password"
            label="Password"
            value={password}
          />
          <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
