import React from 'react'

const VillainHealth = (props) => {
    if(props.hitpoints > 4) {
        return <h4>Thanos is Strong! Attack him to defeat him!</h4>
    } else if(props.hitpoints === 4) {
        return <h4>We need more heroes! Create some below!</h4>
    } else if(props.hitpoints === 3) {
        return <h4>That's it! Keep going!</h4>
    } else if(props.hitpoints === 2) {
        return <h4>He's getting weak!</h4>
    } else if(props.hitpoints === 1) {
        return <h4>Finish Him!</h4>
    } else {
        return <h4>Thanos was Defeated!</h4>
    }
}

export default VillainHealth