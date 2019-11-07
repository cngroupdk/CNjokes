import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchInput } from '../atoms';
import { JokesList } from '../molecules';

import { api } from '../../modules/api';
import {
  setSearchedJokes,
  setJokesLoading,
  setQueryInvalid,
  setQueryValid,
  setQuery,
} from '../../services/actions';
import {
  getSearchedJokes,
  getQuery,
  getIsQueryValid,
  getLoaded,
} from '../../services/selectors';

function useFetchJokesOnValidQuery(query) {
  const dispatch = useDispatch();

  useEffect(() => {
    const queryNoWhitespace = query.split(' ').join('');

    if (queryNoWhitespace.length < 3 || query.length > 120) {
      dispatch(setQueryInvalid());
    } else {
      dispatch(setQueryValid());
      dispatch(setJokesLoading());
      api.fetchSearchedJokes(data => {
        dispatch(setSearchedJokes(data));
      }, query);
    }
  }, [query, dispatch]);
}

export function SearchBlock(props) {
  // Q: are the props still useful here?
  const query = useSelector(getQuery);
  const searchedJokes = useSelector(getSearchedJokes);
  const isQueryValid = useSelector(getIsQueryValid);
  const loaded = useSelector(getLoaded);
  const dispatch = useDispatch();

  const get25Jokes = jokesList => {
    return jokesList && jokesList.slice(0, 25).map(joke => joke.value);
  };

  const handleSearch = event => {
    dispatch(setQuery(event.target.value));
  };

  useFetchJokesOnValidQuery(query);

  const listItems = get25Jokes(searchedJokes);

  return (
    <div className="search-block">
      <h2>Still not satisfied?</h2>
      <p>
        You can use this fulltext search to look for the jokes you're so eager
        to find. <span>&#10549;</span>
      </p>

      <SearchInput searchQuery={props.query} onSearch={handleSearch} />

      {!isQueryValid ? (
        <p>
          The word you seek for must have at least 3 characters and maximum 120.
        </p>
      ) : (
        <JokesList
          jokesLoaded={loaded}
          jokes={listItems}
          hasDuplicates={false}
          styling={'jokes-list jokes-list-light'}
        />
      )}
    </div>
  );
}
