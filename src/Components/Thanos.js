import React, { Component } from 'react';
import DisplayVillain from './DisplayVillain'
import VillainHealth from './VillainHealth'

class Thanos extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Thanos',
            health: 10
        }
    }
    
    handleThanosHealth(){
        const damage = this.props.numOfHeroes.length;
        this.setState({health: 10 - damage})
    }
    
    render(){
        console.log(this.props.numOfHeroes)
        return(
            <div>
                <DisplayVillain bigBaddie = {this.state}/>
                <VillainHealth hitpoints = {this.state.health}/>
                <button onClick = {() => this.handleThanosHealth()}>Attack</button>
            </div>
        )
    }
}

export default Thanos;