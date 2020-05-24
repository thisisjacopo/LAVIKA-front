import React, { Component } from 'react'
import NewSketch from '../components/NewSketch'
import { withAuth } from './../lib/Auth';



class Xp extends Component {
  render(){
  return (

    
     <NewSketch /> 
  
  )
}
}

export default withAuth(Xp);