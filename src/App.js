import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Thanos from './Components/Thanos'
import DisplayHero from './Components/DisplayHero'

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroes: [],
      nameInput: '',
      superpowerInput: ''
    }
  }

  handleNameInput(val){
    this.setState({nameInput: val})
  }

  handleSuperpowerInput(val){
    this.setState({superpowerInput: val})
  }

  handleAddHero(){
    const newHero = {
      name: this.state.name,
      superpower: this.state.superpower
    }
  }

  //componentDidMount() {
  //  axios.get('/api/endpoint')
  //  .then(res => console.log(res))
  //}
  render() {
    const mappedHeroes = this.state.heroes.map((heroObj) => {
      return(
        <DisplayHero key = {heroObj.index} message = {heroObj}/>
      )
    })
    return (
      <div className="App">
        <Thanos />
        {mappedHeroes}
        <div>
          <input onChange = {(e) => this.handleNameInput(e.target.value)}
                 placeholder = 'Enter Hero Name Here'/>
          <input onChange = {(e) => this.handleSuperpowerInput(e.target.value)}
                 placeholder = 'Enter Superpower Here'/>
          <button onClick = {() => this.handleAddHero}>Add Hero</button>
        </div>
      </div>
    );
  }
}

export default App;
