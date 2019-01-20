import React from 'react';

const DisplayHero = (props) => {
    return(
        <div>
            <h4>{props.heroes.name}</h4>
            <h6>Superpower: {props.heroes.superpower}</h6>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default DisplayHero;