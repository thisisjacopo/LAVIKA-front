import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import { withAuth } from './../lib/Auth';
import styled from 'styled-components'

class Xp extends Component {
  render(){
    const Button = styled.button`
    background: ${props => props.theme.yellow[1]};
    color: ${props => props.theme.delete};
    font-family: Comfortaa;
    width: 8rem;
    height: 2rem;
    `

  return (
    <div> 
      <h1>XP PAGE </h1>
      {
        this.state.showSketch ? <NewSketch /> : null
      }
      <AddThing />
      <Button
      variant='outline' 
      mr={2} 
      onClick={() => this.setState({showSketch: !this.state.showSketch})}>toggle sketch</Button>
    </div>
  )
}
}

export default withAuth(Xp);