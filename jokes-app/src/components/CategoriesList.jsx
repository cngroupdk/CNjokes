import React from "react";
import { api } from "../modules/api";

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount = () => {
    api.fetchCategories(this.setCategoriesToState);
  };

  setCategoriesToState = data => {
    this.setState({ categories: data });
  };

  categoryClicked = name => {
    this.props.categorySetter(name);
  };

  render() {
    return (
      <div className="category-container">
        <ul>
          {this.state.categories.map(categoryName => {
            return (
              <li
                key={categoryName}
                onClick={() => this.categoryClicked(categoryName)}
                className={
                  categoryName === this.props.selectedCategory ? "selected" : ""
                }
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
