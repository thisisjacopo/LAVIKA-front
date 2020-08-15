import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const SignupPage = styled.div`
  width: 95%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  letter-spacing: 2px;
  h1 {
    font-size: 3rem;
    font-weight: 200rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
const SignupForm = styled.form`
  width: 25rem;
  height: 30rem;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  text-align: center;
  margin: 1rem;
  border: 2px solid black;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
const Input = styled.input`
  margin: 0.7rem;
  background: none;
  font-size: 2rem;
  color: #272727;
  border: none;
  border-bottom: 2px solid black;
  align-items: center;
  justify-items: center;
  text-align: center;
  cursor: pointer;
`;
const SignupInput = styled.input`
  background: none;
  font-size: 2rem;
  color: #6a041d;
  border: 2px solid black;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 2rem;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #6a041d;
  }
`;

const initialState = {
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
};
class Signup extends Component {
  state = initialState;

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.username || this.state.username < 4) {
      usernameError = "Please entert a valid username";
    }

    if (!this.state.password || this.state.password < 4) {
      passwordError = "Please entert a valid password";
    }

    if (!this.state.email.inclued("@") || this.state.email < 4) {
      emailError = "Please enter a valid and 4 digits minimum long password";
    }

    if (usernameError || passwordError || emailError) {
      this.setState({ usernameError, passwordError, emailError });
      return false;
    }

    return true;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const isValid = this.validate();
    this.props.signup(username, email, password);
    // this.props.signup method is coming from the AuthProvider
    // injected by the withAuth() HOC

    if (isValid) {
      console.log(this.state);
      //clearing form here
      this.setState(initialState);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <SignupPage>
        <Navigation />
        <h1>Sign Up</h1>

        <SignupForm onSubmit={this.handleFormSubmit}>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          {this.state.usernameError ? (
            <div>{this.state.usernameError}</div>
          ) : null}

          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {this.state.emailError ? <div>{this.state.emailError}</div> : null}

          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {this.state.passwordError ? (
            <div>{this.state.passwordError}</div>
          ) : null}

          <SignupInput type="submit" value="Signup" />
        </SignupForm>

        <p>
          {" "}
          Already have account?<Link to={"/login"}> Login</Link>
        </p>
      </SignupPage>
    );
  }
}

export default withAuth(Signup);
