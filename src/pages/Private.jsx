import React, { Component } from "react";
import { withAuth } from './../lib/Auth';
import styled from "styled-components";
import { Device } from "../components/Device";
import Navigation from "../components/Navigation";
import img1 from './../images/hihat.png';
import img2 from './../images/kick.png';
import img3 from './../images/snare.png';
import img4 from './../images/sinte.png';

class Private extends Component {
  render() {
    const AboutInstr = styled.div`
      @media ${Device.laptop} {
        position: relative;
        margin: 0 auto;
      }
      @media ${Device.tablet} {
        width: 100%;
        background-color: blue;
      }
      @media ${Device.mobile} {
        width: 100%;
        background-color: yellow;
      }

      img {
        max-width: 50%;
      }

      .grayscale {
      filter: grayscale(100%);
      transition: 0.5s}

      .grayscale:hover{filter: grayscale(0%) }
      
      h1 {
        font-size: 3em;
        margin-bottom: 5%
      }

      h3 {
        font-size: 1em;
        line-height: 1.4em;
        line-height: 1.4em;
      }

      .aboutInstructions {
        position: absolute;
        text-align: center;
        font-family: Courier;
        width: 45%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    `;
    return (
      <AboutInstr>
      <Navigation/>
      <div className="aboutInstructions">
      <h1>About / Instruccions</h1>
       <h3>Lavika is an app where you can interact with a canvas and produce music and visuals with 3 different options of themes. It was created by Jacopo, Milton and Sofía, three design and music enthusiasts that met through their also common interest, creative coding
      To get started, please navigate to XP, where you'll find a canvas, follow these instructions to start the experience. Click on the upper left corner to add a HI-HAT. For adding a KICK, click on the top right of the canvas. If you wanna add a SNARE,
      go for lower left corner and last but not least, you'll finde the SYNTH on the bottom right. HAPPY CREATING.
       </h3>
       </div>
       <div className="instrumentsContainer">
       <img className="hihat grayscale" src={img1} alt="hihat"/>
       <img className="kick grayscale" src={img2} alt="kick"/> 
       <img className="snare grayscale" src={img3} alt="snare"/> 
       <img className="sinte grayscale" src={img4} alt="sinte"/> 
       </div>
      </AboutInstr>
    );
  }
}

export default withAuth(Private);