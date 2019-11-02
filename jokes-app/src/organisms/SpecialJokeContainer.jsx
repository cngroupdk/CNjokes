import React, { useEffect } from 'react';

import { SpecialJoke } from '../molecules';
import { api } from '../modules/api';
import { useSelector, useDispatch } from 'react-redux';
import { setJoke } from '../services/actions';
import { getSelectedJoke } from '../services/selectors';

export function SpecialJokeContainer() {
  const dispatch = useDispatch();
  const selectedJoke = useSelector(getSelectedJoke);

  const fetchRandomJoke = () => {
    const setJokeToState = data => {
      dispatch(setJoke(data));
    };

    api.fetchRandomJoke(setJokeToState);
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <SpecialJoke jokeText={selectedJoke} onReload={fetchRandomJoke} />;
}
