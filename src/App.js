import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroes: []
    }
  }

  //componentDidMount() {
  //  axios.get('/api/endpoint')
  //  .then(res => console.log(res))
  //}
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
