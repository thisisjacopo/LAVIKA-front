import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './lib/Auth';
import {ThemeProvider} from "styled-components";

const theme = {
<<<<<<< HEAD
  black: ['#1A1A1A', '#272727'],
=======
  black: ['#1a1a1a', '#272727'],
>>>>>>> master
  yellow: ['#FFCF56', '#E4B363'],
  delete: '#C5283D',
  save: '#109648',
}
<<<<<<< HEAD
=======

>>>>>>> master

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
  </ThemeProvider>
<<<<<<< HEAD
  , document.getElementById('root'));
=======
  , document.getElementById('root'));


>>>>>>> master
