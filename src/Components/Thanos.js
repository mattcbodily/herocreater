import React, { Component } from 'react';
import DisplayVillain from './DisplayVillain'

class Thanos extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Thanos',
            health: 16,
            healthMessage: ''
        }
    }
    
    handleThanosHealth(){
        const damage = this.props.numOfHeroes.length;
        this.setState({health: 16 - damage})
    }

    
    
    render(){
        console.log(this.props.numOfHeroes)
        return(
            <div>
                <DisplayVillain bigBaddie = {this.state}/>
                <button onClick = {() => this.handleThanosHealth()}>Attack</button>
            </div>
        )
    }
}

export default Thanos;