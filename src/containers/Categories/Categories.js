import React, { Component } from "react";
import Category from "../../components/Category/Category";
import "./categories.css";
import MockCategories from  "../../mockdata/categories.json";

class Categories extends Component {
  state = MockCategories;

  render() {
    let categories = null;
    categories = (
      <div>
        {this.state.categories.map((category, index) => {
          return <Category name={category.name} key={category.id} />;
        })}
      </div>
    );

    console.log(categories);

    return <div className="categories">{categories}</div>;
  }
}

export default Categories;
