import React from 'react';

function Room ({litDark,lightSwitch}){


    return (

        <div>
            <button onClick = {lightSwitch}>Lit / Dark</button>
            <p>The room is {litDark}</p>
        </div>
    )
}

export default Room;