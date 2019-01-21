import React from 'react';
import axios from 'axios';

class DisplayHero extends React.Component {
constructor(){
    super();
    this.state = {
        editItem: false,
        newName: '',
        newPower: ''
    }
}

handleClick(){
    this.setState({editItem: !this.state.editItem})
}

handleNameChange(val){
    this.setState({newName: val})
}

handlePowerChange(val){
    this.setState({newPower: val})
}

handleUpdate(index){
    let editHero = {
        name: this.state.newName,
        superpower: this.state.newPower
    }
    axios.put(`/api/heroes/${index}`, editHero)
         .then((res) => {
             this.props.updateHero(res.data);
             this.handleClick();
         })
}

handleDelete(index){
    console.log(index)
    axios.delete(`/api/heroes/${index}`)
         .then((res) => {
             this.props.deleteHero(res.data);
         })
}

render(){
    return(
     <div>
      {!this.state.editItem ?
       (<div className = "Herobox">
            <h4>{this.props.heroes.name}</h4>
            <h6>Superpower: {this.props.heroes.superpower}</h6>
            <button className = "Herobutton"
                    onClick = {() => this.handleClick()}>Edit</button>
            <button className = "Herobutton"
                    onClick = {() => this.handleDelete(this.props.index)}>Snap</button>
       </div>) : (
        <div className = "Herobox">
            <input 
                onChange = {(e) => this.handleNameChange(e.target.value)}
                value = {this.state.newName}
                placeholder = 'Edit Name Here'/>
            <input 
                onChange = {(e) => this.handlePowerChange(e.target.value)}
                value = {this.state.newPower}
                placeholder = 'Edit Power Here'/>
            <button onClick = {() => this.handleUpdate(this.props.index)}>Submit</button>
        </div>   
       )}
     </div>
    )}
}

export default DisplayHero;