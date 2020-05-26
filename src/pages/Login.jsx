import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginPage = styled.div`
  width: 95%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  letter-spacing:2px;

  h1{
    font-size:4rem;
    font-weight: 200rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
const LoginForm = styled.form`
  width: 25rem;
  height: 25rem;
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
margin: 1rem;
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
const LoginInput = styled.input`
  background: none;
  font-size: 2rem;
  color: #6A041D;
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
        <h1>Login</h1>

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
