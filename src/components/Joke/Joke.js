import React from "react";
import PropTypes from 'prop-types';

import './joke.css';

const Joke=({ text })=>(
    <div className="joke-background">
      <p className="joke">
        {text}
      </p>
    </div>
);

Joke.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Joke;
