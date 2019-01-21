import React from 'react';

const DisplayVillain = (props) => {
    return(
        <div className = "Infinitybox">
            <h1>{props.bigBaddie.name}</h1>
            <h4>HP: {props.bigBaddie.health}</h4>
        </div>
    )
}

export default DisplayVillain