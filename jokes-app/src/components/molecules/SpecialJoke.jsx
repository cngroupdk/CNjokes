import React from 'react';

import {
  SpecialJokeBlock,
  SpecialJokeText,
  SpecialJokeReloadButton,
} from '../atoms';

export function SpecialJoke({ jokeText, onReload }) {
  return (
    <SpecialJokeBlock>
      <SpecialJokeText>{jokeText}</SpecialJokeText>
      <SpecialJokeReloadButton onClick={onReload} />
    </SpecialJokeBlock>
  );
}
