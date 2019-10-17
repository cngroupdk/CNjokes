import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/search?query={query}';

class SatisfactionSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

    handleSearch = () => {
        console.log(this.state.query);
    }

    render() {
        return (
            <>
              <p>You can use this fulltext search to look for the jokes you're so eager to find.</p>
              <input type="search" value={this.state.query} onChange={this.handleChange}/>
              <button onClick={this.handleSearch}>Search!</button>
            </>
        );
    }
}

export default SatisfactionSearch;