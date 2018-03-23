import React, { Component } from "react";
import Category from "../../components/Category/Category";
import PropTypes from 'prop-types';

import "./Categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesCategories: [],
    }
  }

  componentWillMount() {
    fetch( 'https://api.chucknorris.io/jokes/categories' )
      .then( response => response.json() )
      .then( data => this.setState({jokesCategories: data}) )
  }

  render() {
    const { jokesCategories } = this.state;
    let categories = null;

    categories = (
      <div>
        {jokesCategories.map((category, index) => {
          return <Category name={category} key={index} handleClick={this.props.handleClick}/>;
        })}
      </div>
    );

    //console.log(categories);

    return <div className="categories">{categories ? categories : "Loading..."}</div>;
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
