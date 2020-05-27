import React from "react";
import styled from "styled-components";
import { Device } from "../components/Device";
import { Link } from "react-router-dom";

function Home() {
  const HomeCointainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-items: center;
    text-align: center;
    color: black;
    width: 100%;
    letter-spacing: 15px;

    a {
      text-decoration: none;
      font-weight: 500;
    }
  `;

  const HomeBtn = styled.button`
    color: rgba(208,208,213,1);
    border: 2px solid black;
    display: flex;
    font-family: Mantra;
    margin-top: 15%;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    font-weight: 800;
    font-size: 2rem;

    :hover {
      color: black;
      background: -webkit-linear-gradient(55deg, rgba(208,208,213,1) 56%, rgba(3,15,11,1) 100%);
    }
  `;

  const Title = styled.h1`
    @media ${Device.laptop} {
      max-width: 1100px;
      font-size: 10rem;
      font-family: Mantra;
      margin-top: 15%;
      background: -webkit-linear-gradient(55deg, rgba(198,208,213,1) 16%, rgba(3,15,11,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media ${Device.tablet} {
      max-width: 768px;
      font-size: 6rem;
    }
    @media ${Device.mobile} {
      max-width: 400px;
      font-size: 3rem;
    }
  `;
  return (
    <HomeCointainer>
      <Title>Lavika</Title>
      <Link to={"/private"} id="xp-btn">
        <HomeBtn>ENTER</HomeBtn>
      </Link>
    </HomeCointainer>
  );
}

export default Home;
