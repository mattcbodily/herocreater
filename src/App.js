import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Thanos from './Components/Thanos'
import DisplayHero from './Components/DisplayHero'
import Username from './Components/Username'

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroes: [],
      nameInput: '',
      superpowerInput: '',
    }
    console.log(this.state.heroes)
    this.handleUpdateHero = this.handleUpdateHero.bind(this);
    this.handleDeleteHero = this.handleDeleteHero.bind(this);
  }

  handleNameInput(val){
    this.setState({nameInput: val})
  }

  handleSuperpowerInput(val){
    this.setState({superpowerInput: val})
  }

  handleGetAvengers(){
    axios.get('/api/heroes')
    .then (response => {
      this.setState({
        heroes: response.data
      })
    })
  }

  handleAddHero(){
    const newHero = {
      name: this.state.nameInput,
      superpower: this.state.superpowerInput
    }
    axios.post('/api/heroes', newHero)
    .then (response => {
      this.setState({heroes: response.data})
    })
    this.setState({nameInput: ''})
    this.setState({superpowerInput: ''})
  }

  handleUpdateHero(data) {
    this.setState({heroes: data})
  }

  handleDeleteHero(data) {
    this.setState({heroes: data})
  }

  render() {
    const mappedHeroes = this.state.heroes.map((heroObj, index) => {
      return(
        <DisplayHero key = {index} heroes = {heroObj}
                     updateHero = {this.handleUpdateHero}
                     deleteHero = {this.handleDeleteHero}
                     index = {index}/>
      )
    })
    return (
      <div className="App">
      {this.state.heroes.length ? (
      <div>
        <Thanos numOfHeroes = {this.state.heroes}/>
        <Username heroNumber = {this.state.heroes}/>
          <input onChange = {(e) => this.handleNameInput(e.target.value)}
                 placeholder = 'Enter Hero Name Here'
                 value = {this.state.nameInput}/>
          <input onChange = {(e) => this.handleSuperpowerInput(e.target.value)}
                 placeholder = 'Enter Superpower Here'
                 value = {this.state.superpowerInput}/>
          <button onClick = {() => this.handleAddHero()}>Add Hero</button>
          <div className = "Herolayout">
            {mappedHeroes}
          </div>  
      </div>
      ) : (
        <div className = "Frontpage">
          <h2>Thanos has invaded Earth! It's up to you to assemble the Avengers to defeat him.</h2>
          <Username heroNumber = {this.state.heroes}/>
          <button onClick = {() => this.handleGetAvengers()}>Assemble</button>
        </div>  
      )}
      </div>
    );
  }
}

export default App;