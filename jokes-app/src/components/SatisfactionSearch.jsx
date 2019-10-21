import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/search?query=';
let finalUri = ''

class SatisfactionSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            searchedJokes: []
        }
    }

    updateQueryStringParameter = () => {
        const value = this.state.query;
        finalUri = API_URL + value
        console.log(finalUri);
      }

    componentDidMount = () => {
        fetch(finalUri)
          .then(response => response.json())
          .then(dataFromApi => {
            console.log(dataFromApi.result)
            this.setState({ searchedJokes: dataFromApi.result });
          });
    };

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

    handleSearch = () => {
        this.updateQueryStringParameter();
        this.componentDidMount();
    }

    render() {
        const listItems = this.state.searchedJokes.map((joke) => <p key={joke.id}>{joke.value}</p>);

        return (
            <>
              <p>You can use this fulltext search to look for the jokes you're so eager to find.</p>
              <input type="search" value={this.state.query} onChange={this.handleChange}/>
              <button onClick={this.handleSearch}>Search!</button>
              {listItems}
            </>
        );
    }
}

export default SatisfactionSearch;