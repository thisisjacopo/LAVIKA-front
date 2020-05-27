import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginPage = styled.div`
  display: flex;
  font-family: courier;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  letter-spacing:2px;

  a:link {
    text-decoration: none;
    color: black;
  }
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  text-align: center;
  margin: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 400;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Input = styled.input`
  margin: 1rem;
  background: none;
  font-size: 1em;
  padding: 1em 6em;
  text-align: center;
  color: #272727;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const LoginInput = styled.input`
  font-family: courier;
  background: none;
  font-size: 1rem;
  border: 2px solid black;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 2.5rem;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  :hover{
    background-color: white;
    color: #6A041D;
  }
`;

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
    // this.props.login method is coming from the AuthProvider
    // injected by the withAuth() HOC
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <LoginPage>
        <Navigation />

        <LoginForm onSubmit={this.handleFormSubmit}>
          <Label>Username:</Label>
          <Input
            color="black"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />

          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <LoginInput type="submit" value="Login" />
        </LoginForm>
        <p>
          {" "}
          Don't have account yet? <Link to={"/login"}>Signup</Link>
        </p>
      </LoginPage>
    );
  }
}

export default withAuth(Login);