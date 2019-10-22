import React from 'react';
import JokesList from './JokesList'

const API_URL = 'https://api.chucknorris.io/jokes/search?query=';
let finalUri = ''

class SearchBlock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            searchedJokes: []
        }
    }

    updateQueryUrl = (API_URL, query) => {
        finalUri = API_URL + query
        console.log(finalUri);
      }

    fetchData = () => {
        fetch(finalUri)
                .then(response => response.json())
                .then(dataFromApi => {
                  console.log(dataFromApi.result)
                  this.setState({ searchedJokes: dataFromApi.result });
          });
    }

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    handleSearch = () => {
        this.updateQueryUrl(API_URL, this.state.query);
        if (this.state.query === ''){
            console.log('Nic jsi nenapsal.')
        } else{
            this.fetchData();
        }
      
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

export default SearchBlock;