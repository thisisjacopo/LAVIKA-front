import React from 'react';
import './App.css';
import Sketches from './components/Sketches'
import NewSketch from './components/NewSketch'
import AddThing from './components/AddThing';
function App() {
  return (
    <div className="App">
    <NewSketch />
    <AddThing />
    </div>
  );
}

export default App;
