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
        this.loadCategoriesFromAPI()
        // Q: how about this.setState(categories:  this.getCategoriesFromAPI()) ?
    };

    loadCategoriesFromAPI = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                data.push("all") // let's add "all" category
                this.setState({ categories: data });
            });
    }

    categoryClicked = (name) => {
        this.props.categorySetter(name)
    }

    render() {
        return (
            <div className="category-container">
                <ul>
                    {this.state.categories.map((categoryName) => {
                        return (
                            <li
                                key={categoryName}
                                onClick={() => this.categoryClicked(categoryName)}
                                className={categoryName === this.props.selectedCategory ? "selected" : ""}
                            >
                                {categoryName}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default CategoriesList;