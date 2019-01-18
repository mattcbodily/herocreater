import React from 'react';

const DisplayHero = (props) => {
    return(
        <div>
            <h3>{props.heroes.name}</h3>
            <h5>Superpower: {props.heroes.superpower}</h5>
        </div>
    )
}

export default DisplayHero;