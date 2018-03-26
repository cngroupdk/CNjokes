import React from "react";
import PropTypes from 'prop-types';

import './Joke.css';

export function Joke({ text }) {
  return (
    <div className="joke-background">
      <p className="joke">
        {text}
      </p>
    </div>
  );
};

Joke.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Joke;
