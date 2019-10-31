import React from 'react';
import { api } from '../modules/api';
import JokesList from './JokesList';
import CategoriesList from './CategoriesList';
import JokesCountSetter from './JokesCountSetter';

class CategoryBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4,
      category: 'all',
      jokes: [],
      categories: [],
      jokesLoaded: false,
      hasDuplicateJokes: true,
    };
    this.categorySetter = this.categorySetter.bind(this);
    this.countSetter = this.countSetter.bind(this);
  }

  // getAPIRequestURL(category) {
  //   const baseUrl = "https://api.chucknorris.io/jokes/random";

  //   if (category !== "all") {
  //     return `${baseUrl}?category=${category}`;
  //   }
  //   return baseUrl;
  // }

  categorySetter(categoryName) {
    this.setState({ category: categoryName });
  }

  setCategoriesToState = data => {
    this.setState({ categories: data });
  };

  countSetter(jokesCount) {
    this.setState({ count: parseInt(jokesCount) });
  }

  componentDidMount = () => {
    this.loadJokesFromAPI(this.state.category, this.state.count);
    api.fetchCategories(this.setCategoriesToState);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.count !== this.state.count ||
      prevState.category !== this.state.category
    ) {
      this.loadJokesFromAPI(this.state.category, this.state.count);
    }
  };

  loadJokesFromAPI(category, numberOfJokes) {
    this.setState({ jokesLoaded: false });
    api.fetchAmountOfJokesByCategory(
      this.setJokesToState,
      category,
      numberOfJokes,
    );
  }

  setJokesToState = (jokes, hasDuplicateJokes) => {
    this.setState({
      jokes: jokes,
      jokesLoaded: true,
      hasDuplicateJokes: hasDuplicateJokes,
    });
  };

  countUpdated(e) {
    this.setState({ count: parseInt(e.target.value) });
  }

  render() {
    return (
      <div className="category-block">
        <h2>Or choose from categories</h2>
        <CategoriesList
          categorySetter={this.categorySetter}
          selectedCategory={this.state.category}
          categories={this.state.categories}
        />
        <JokesCountSetter countSetter={this.countSetter} />
        <JokesList
          jokesLoaded={this.state.jokesLoaded}
          jokes={this.state.jokes}
          hasDuplicates={this.state.hasDuplicateJokes}
        />
      </div>
    );
  }
}

export default CategoryBlock;
