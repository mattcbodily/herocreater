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

    //handleHealthMessage(){
    //   if (this.state.health >= 10){
    //        this.setState({healthMessage: 'Thanos is strong! Add heroes to defeat him!'})
    //    } else if (this.state.health < 10 && this.state.health >= 7) {
    //        this.setState({healthMessage: `That's it! Keep going!`})
    //    } else if (this.state.health < 7 && this.state.health > 1) {
    //        this.setState({healthMessage: 'Almost There!'})
    //    } else if (this.state.health === 1) {
    //        this.setState({healthMessage: 'Finish Him!'})
    //    } else {
    //        this.setState({healthMessage: 'Defeated!'})
    //    }
    //}
    
    render(){
        console.log(this.props.numOfHeroes)
        return(
            <div>
                <DisplayVillain bigBaddie = {this.state}/>
                <button onClick = {() => this.handleThanosHealth()}>Attack</button>
                <VillainHealth hitpoints = {this.state.health}/>
            </div>
        )
    }
}

export default Thanos;