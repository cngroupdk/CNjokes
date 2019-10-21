import React from 'react';
import JokesList from './JokesList'
import CategoriesList from './CategoriesList';
import JokesCountSetter from './JokesCountSetter';


class CategoryBlock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 4,
            category: "all",
            jokes: [],
            loaded: false
        }
        this.categorySetter = this.categorySetter.bind(this)
        this.countSetter = this.countSetter.bind(this)

    }

    getAPIRequestURL(category) {
        const baseUrl = "https://api.chucknorris.io/jokes/random"

        if (category !== "all") {
            return `${baseUrl}?category=${category}`
        }
        return baseUrl
    }

    categorySetter(categoryName) {
        this.setState({ category: categoryName })
    }

    countSetter(jokesCount) {
        this.setState({ count: parseInt(jokesCount) })
    }

    componentDidMount = () => {
        this.loadJokesFromAPI(this.state.category, this.state.count)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if ((prevState.count !== this.state.count) || (prevState.category !== this.state.category)) {
            this.loadJokesFromAPI(this.state.category, this.state.count)
        }
    }

    loadJokesFromAPI(category, numberOfJokes) {
        let jokes = []
        let jokesLoaded = 0
        for (let i = 0; i < numberOfJokes; i++) {
            fetch(this.getAPIRequestURL(category))
                .then(response => response.json())
                .then(data => {
                    jokes.push(data.value)
                    jokesLoaded++
                    if (jokesLoaded === numberOfJokes) {
                        this.setState({ jokes: jokes, loaded: true });
                    } else {
                        this.setState({ loaded: false })
                    }
                });
        }
    }

    countUpdated(e) {
        this.setState({ count: parseInt(e.target.value) })
    }

    render() {
        return (
            <div>
                <h2>Or choose from categories</h2>
                <CategoriesList
                    categorySetter={this.categorySetter}
                    selectedCategory={this.state.category}
                />
                <JokesCountSetter
                    countSetter={this.countSetter}
                />
                <JokesList
                    loaded={this.state.loaded}
                    jokes={this.state.jokes} />
            </div>
        );
    }
}

export default CategoryBlock;