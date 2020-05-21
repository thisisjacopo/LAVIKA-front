import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import AddThing from '../components/AddThing'
import { withAuth } from './../lib/Auth';

class Xp extends Component {
  state = {
    showSketch: true,
  }

  render(){
  return (
    <div> 
      <h1>XP PAGE </h1>
      {
        this.state.showSketch ? <NewSketch /> : null
      }
      <AddThing />
      <button onClick={() => this.setState({showSketch: !this.state.showSketch})}>toggle sketch</button>
    </div>
  )
}
}

export default withAuth(Xp);