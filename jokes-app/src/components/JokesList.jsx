import React from 'react';

function JokesList(props) {
    return (
        <ul className="jokes-list">
            {
                props.loaded ?
                    props.jokes.map((joke, index) => <li key={index}>{joke}</li>) :
                    "Loading..."
            }
        </ul>
    )
}

export default JokesList;