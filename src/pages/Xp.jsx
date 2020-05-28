import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import NewSketch2 from '../components/NewSketch2'
import NewSketch3 from '../components/NewSketch3'
import { withAuth } from './../lib/Auth';
import axios from 'axios'
import styled from "styled-components";
import { Device } from "../components/Device";
import Navigation from "../components/Navigation";

const XpContainer = styled.div`
@media ${Device.laptop} {
  text-align:center
}
.buttonSwitch{
  margin-top: 25px
} 
@media ${Device.tablet} {
}
@media ${Device.mobile} {
 
}
`;
class Xp extends Component {
  constructor(props){
  super(props)
  this.state = {
    scene: null,
    canvas: 0,
    saved: false,
    message: undefined
  }
}
  componentDidMount() {
    let sceneId = this.props.match.params.id;

    if(sceneId) {
      axios.get(process.env.REACT_APP_API_URL + `/scenes/${sceneId}`, { withCredentials: true })
    
      .then((response) => {
        let scene = response.data
        const canvas = scene.canvas
        this.setState({scene, canvas})

      }).catch((err) => {
        console.log(err);
      });
    } else {
      this.setState({scene: false})
    }
  }

  savedSceneMessage = (type) => {
    let message 
    if(type === 'saved') {
      message = 'saved'
    } else if(type === 'updated') {
      message = 'updated'
    }

    this.setState({saved:true, message}, () => setTimeout( () => this.setState({saved:false, message:undefined}), 2000 ))
  }

  switchCanvas = ()=>{
    this.setState({canvas: (this.state.canvas + 1) % 3})

  }
  render(){
    let canvas;
    switch(this.state.canvas){
      case(0):
      canvas = <NewSketch scene = {this.state.scene} savedSceneMessage={this.savedSceneMessage} />
      break;
      case(1):
      canvas = <NewSketch2 scene = {this.state.scene} savedSceneMessage={this.savedSceneMessage}  />
      break;
      case(2):
      canvas = <NewSketch3 scene = {this.state.scene} savedSceneMessage={this.savedSceneMessage} />
      break;
      default:
      canvas = <NewSketch scene = {this.state.scene} savedSceneMessage={this.savedSceneMessage} />
      break; 
    }

  return (
    <XpContainer>
    <Navigation />
      <button className="buttonSwitch" onClick={this.switchCanvas}>Switch experience</button>
    {
      this.state.scene === null 
      ? 'put spinner here' 
      : canvas
    }
    {
        this.state.saved
         ? <div> <h1 style={{color:'white'}}>{this.state.message}</h1></div>
         :null
       }
    </XpContainer>
  )
}
}

export default withAuth(Xp);