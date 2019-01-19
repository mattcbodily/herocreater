import React, { Component } from 'react';

class Username extends Component {
    constructor(){
        super();
        this.state = {
            username: ''
        }
    }

    handleUsernameInput(val) {
        this.setState({username: val})
    }
    render(){
        return(
            <div>
                <input onChange = {(e) => this.handleUsernameInput(e.target.value)}
                       placeholder = 'Enter Username Here'/>
            </div>
        )
    }
}

export default Username;