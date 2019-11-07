import React from 'react';

export function JokesList({ jokesLoaded, jokes, hasDuplicates, styling }) {
  return (
    <div>
      {hasDuplicates ? (
        <p className="info-error">
          Sorry, we couldn't get more than {jokes.length} this time :(
        </p>
      ) : (
        ''
      )}
      <ul className={styling}>
        {jokesLoaded
          ? jokes.map((joke, index) => <li key={index}>{joke}</li>)
          : 'Loading...'}
      </ul>
      {jokes.length ? '' : 'No matches :('}
    </div>
  );
}
