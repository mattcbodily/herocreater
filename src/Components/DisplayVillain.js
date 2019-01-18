import React from 'react';

const DisplayVillain = (props) => {
    return(
        <div>
            <h1>{props.bigBaddie.name}</h1>
            <h4>{props.bigBaddie.health}</h4>
            <h4>{props.bigBaddie.healthMessage}</h4>
        </div>
    )
}

export default DisplayVillain