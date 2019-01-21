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
            {this.props.heroNumber.length ? (
            <div>
                <h4>{this.state.username}'s Avengers</h4>
            </div>
            ) : (
                <div>
                <input onChange = {(e) => this.handleUsernameInput(e.target.value)}
                       placeholder = 'Enter Username Here'/>
                
            </div>
            )}
            </div>
        )
    }
}

export default Username;