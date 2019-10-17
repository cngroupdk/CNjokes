import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/categories';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            selectedCategory: "- All -"
        }
    }

    componentDidMount = () => {
        this.loadCategoriesFromAPI()
        // Q: how about this.setState(getCategoriesFromAPI()) ?
    };

    loadCategoriesFromAPI = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                data.push("- All -") // let's add All category
                this.setState({ categories: data });
            });
    }

    categoryClicked = (name) => {
        this.setState({ selectedCategory: name })
        console.log("Category " + name + " clicked!");
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
                                className={categoryName === this.state.selectedCategory ? "selected" : ""}
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