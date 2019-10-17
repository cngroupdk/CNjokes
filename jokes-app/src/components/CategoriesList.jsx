import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/categories';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            categories: []
        }
    }

    componentDidMount = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data });
            });
    };

    render() {
        return (
            <>
            <p>This is the list of categories</p>
                <ul>
                    {this.state.categories.map((category) => {
                        return <li>{category}</li>
                    })}
                </ul>
            </>
        );
    }
}

export default CategoriesList;