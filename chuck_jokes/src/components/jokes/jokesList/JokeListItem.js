import React from "react";

const JokeListItem = ({ joke }) => {
  console.log(joke);
  return (
    <div className="joke box">
      <p>{joke.value}</p>
    </div>
  );
};

export default JokeListItem;
