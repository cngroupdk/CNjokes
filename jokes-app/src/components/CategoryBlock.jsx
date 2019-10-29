import React from "react";
import { api } from "../modules/api";
import JokesList from "./JokesList";
import CategoriesList from "./CategoriesList";
import JokesCountSetter from "./JokesCountSetter";

class CategoryBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4,
      category: "all",
      jokes: [],
      categories: [],
      loaded: false,
      hasDuplicateJokes: true
    };
    this.categorySetter = this.categorySetter.bind(this);
    this.countSetter = this.countSetter.bind(this);
  }

  getAPIRequestURL(category) {
    const baseUrl = "https://api.chucknorris.io/jokes/random";

    if (category !== "all") {
      return `${baseUrl}?category=${category}`;
    }
    return baseUrl;
  }

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
    let jokes = [];
    let jokesLoaded = 0;
    this.setState({ loaded: false });

    if (numberOfJokes === 0) {
      this.setState({ loaded: true, jokes: [] });
      return;
    }

    for (let i = 0; i < numberOfJokes; i++) {
      fetch(this.getAPIRequestURL(category))
        .then(response => response.json())
        .then(data => {
          jokes.push(data.value);
          jokesLoaded++;
          if (jokesLoaded === numberOfJokes) {
            const uniqueJokes = [...new Set(jokes)];
            const hasDuplicateJokes =
              uniqueJokes.length === numberOfJokes ? false : true;
            this.setState({
              jokes: uniqueJokes,
              loaded: true,
              hasDuplicateJokes: hasDuplicateJokes
            });
          }
        });
    }
  }

  countUpdated(e) {
    this.setState({ count: parseInt(e.target.value) });
  }

  render() {
    return (
      <div>
        <h2>Or choose from categories</h2>
        <CategoriesList
          categorySetter={this.categorySetter}
          selectedCategory={this.state.category}
          categories={this.state.categories}
        />
        <JokesCountSetter countSetter={this.countSetter} />
        <JokesList
          loaded={this.state.loaded}
          jokes={this.state.jokes}
          hasDuplicates={this.state.hasDuplicateJokes}
        />
      </div>
    );
  }
}

export default CategoryBlock;
