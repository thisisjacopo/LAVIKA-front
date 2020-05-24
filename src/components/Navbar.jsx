import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import styled from 'styled-components'
import { Device } from '../components/Device';


class Navbar extends Component {
  render() {
    // `user`, `logout`, `isLoggedIn` are coming from the AuthProvider
    // and are injected by the withAuth HOC
    const { user, logout, isLoggedIn } = this.props;
    const Navbar = styled.nav`
        @media ${Device.laptop} { 
    color: yellow;
    display: flex;
    flex-direction: row;
    max-height: 8rem;
    background-color: ${props => props.theme.black[0]};
    width: 100%;
  }

    @media ${Device.tablet} { 
    color: green;
    background-color: ${props => props.theme.black[1]};
  }

  @media ${Device.mobile} { 
    color: red;
  }
`

    return (
        <Navbar
          px={1}
          color="white"
          bg="black"
          alignItems="center"
          className="navbar"
        >
          <Link to={"/"} id="home-btn">
            <h4>LAVIKA</h4>
          </Link>
          {isLoggedIn ? (
            <div className="navbar-btns">
              <Link to={"/profile"} id="profile-btn">
                <h4>{user.username}</h4>
              </Link>
              <Link to={"/xp"} id="xp-btn">
                <h4>XP</h4>
              </Link>
              <Link to={"/comunity"} id="comunity-btn">
                <h4>COMUNITY</h4>
              </Link>
              <h4 onClick={logout}> Logout </h4>
            </div>
          ) : (
            <>
              <Link to="/login">
                {" "}
                <h4 className="navbar-button">Login</h4>{" "}
              </Link>
              <br />
              <Link to="/signup">
                {" "}
                <h4 className="navbar-button">Sign Up</h4>{" "}
              </Link>
            </>
          )}
        </Navbar>
    );
  }
}

export default withAuth(Navbar);
