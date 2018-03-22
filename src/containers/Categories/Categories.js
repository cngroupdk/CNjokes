import React, { Component } from "react";
import Category from "../../components/Category/Category";
import "./categories.css";

class Categories extends Component {
  state = {
    categories: [
      { id: 1, name: "Animal" },
      { id: 2, name: "Carreer" },
      { id: 3, name: "Celeb" },
      { id: 4, name: "Dev" },
      { id: 5, name: "Fashion" },
      { id: 6, name: "Food" },
      { id: 7, name: "History" },
      { id: 8, name: "Money" },
      { id: 9, name: "Movie" },
      { id: 10, name: "Music" },
      { id: 11, name: "Political" },
      { id: 12, name: "Religion" },
      { id: 13, name: "Science" },
      { id: 14, name: "Sport" }
    ]
  };

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
