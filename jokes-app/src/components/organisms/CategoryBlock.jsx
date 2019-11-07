import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { api } from '../../modules/api';
import {
  setCategory,
  setCategories,
  setJokesCount,
  setJokesLoaded,
  setCategoryJokes,
} from '../../services/actions';
import {
  getCount,
  getCategory,
  getJokes,
  getCategories,
  getJokesLoaded,
  getHasDuplicateJokes,
} from '../../services/selectors';

import { JokesList, JokesCountSetter, CategoriesList } from '../molecules';

export function CategoryBlock() {
  const dispatch = useDispatch();

  const count = useSelector(getCount);
  const category = useSelector(getCategory);
  const jokes = useSelector(getJokes);
  const categories = useSelector(getCategories);
  const jokesLoaded = useSelector(getJokesLoaded);
  const hasDuplicateJokes = useSelector(getHasDuplicateJokes);

  useEffect(() => {
    loadJokesFromAPI(category, count);
    api.fetchCategories(setCategoriesToState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    loadJokesFromAPI(category, count);
  }, [category, count]);

  const categorySetter = categoryName => {
    dispatch(setCategory(categoryName));
  };

  const setCategoriesToState = data => {
    dispatch(setCategories(data));
  };

  const countSetter = jokesCountNumber => {
    dispatch(setJokesCount(jokesCountNumber));
  };

  const loadJokesFromAPI = (category, numberOfJokes) => {
    dispatch(setJokesLoaded());
    api.fetchAmountOfJokesByCategory(setJokesToState, category, numberOfJokes);
  };

  const setJokesToState = (jokes, hasDuplicateJokes) => {
    dispatch(setCategoryJokes(jokes, hasDuplicateJokes));
  };

  return (
    <div className="category-block">
      <h2>Or choose from categories</h2>
      <CategoriesList
        categorySetter={categorySetter}
        selectedCategory={category}
        categories={categories}
      />
      <JokesCountSetter countNumber={count} countSetter={countSetter} />
      <JokesList
        jokesLoaded={jokesLoaded}
        jokes={jokes}
        hasDuplicates={hasDuplicateJokes}
        styling={'jokes-list jokes-list-dark'}
      />
    </div>
  );
}
