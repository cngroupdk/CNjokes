import React from 'react';

function JokesList(props) {
    return (
        <div>
            {props.hasDuplicates ? <p>Here's your {props.jokes.length} jokes! :)</p> : <p>Sorry, we couldn't get more than {props.jokes.length} this time :(</p>}
            <ul className="jokes-list">
                {
                    props.loaded ?
                        props.jokes.map((joke, index) => <li key={index}>{joke}</li>) :
                        "Loading..."
                }
            </ul>
        </div>
    )
}

export default JokesList;