import React from 'react';

const DisplayHero = (props) => {
    return(
        <div className = "Herobox">
            <h4>{props.heroes.name}</h4>
            <h6>Superpower: {props.heroes.superpower}</h6>
            <button className = "Herobutton">Edit</button>
            <button className = "Herobutton">Delete</button>
        </div>
    )
}

export default DisplayHero;