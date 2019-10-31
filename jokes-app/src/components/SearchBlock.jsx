import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { api } from '../modules/api';
import { setSearchedJokes } from '../actions';
import { setJokesLoading } from '../actions';
import { setQueryInvalid } from '../actions';
import { setQueryValid } from '../actions';
import { setQuery } from '../actions';
import JokesList from './JokesList';
import {
  getSearchedJokes,
  getQuery,
  getIsQueryValid,
  getLoaded,
} from '../services/selectors';

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

      <div className="joke-search input-group">
        <div className="input-group-prepend">
          <span className="search-icon-box input-group-text ">
            <span className="search-icon">&#9740;</span>
          </span>
        </div>
        <input
          className="form-control search-input"
          type="text"
          placeholder="Search"
          value={props.query}
          onChange={handleSearch}
        />
      </div>
      {!isQueryValid ? (
        <p>
          The word you seek for must have at least 3 characters and maximum 120.
        </p>
      ) : (
        <JokesList
          jokesLoaded={loaded}
          jokes={listItems}
          hasDuplicates={false}
        />
      )}
    </div>
  );
}
