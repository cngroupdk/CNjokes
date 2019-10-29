import React from "react";

function JokesList({ loaded, jokes, hasDuplicates }) {
  return (
    <div>
      {hasDuplicates ? (
        <p>Sorry, we couldn't get more than {jokes.length} this time :(</p>
      ) : (
        ""
      )}
      <ul className="jokes-list">
        {loaded
          ? jokes.map((joke, index) => <li key={index}>{joke}</li>)
          : "Loading..."}
      </ul>
      {jokes.length ? "" : "no matches :("}
    </div>
  );
}

export default JokesList;
