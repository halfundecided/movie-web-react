import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie/Movie.js';

class App extends Component {
  /* All components should have the render function */
  render() {
    return (
     <div className="App">
      <Movie />
     </div> 
    );
  }
}

export default App;
