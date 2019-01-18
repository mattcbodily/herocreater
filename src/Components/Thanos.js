import React, { Component } from 'react';
import DisplayVillain from './DisplayVillain'

class Thanos extends Component {
    constructor(){
        super();
        this.state = {
            name: Thanos,
            health: 10,
            healthMessage: ''
        }
    }


    render(){
        return(
            <div></div>
        )
    }
}

export default Thanos;