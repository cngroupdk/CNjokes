import React, { Component } from "react";
import Category from "../../components/Category/Category";
import PropTypes from 'prop-types';

import apiBaseURL from '../../components/apiBaseURL'
import "./categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesCategories: [],
    }
  }

  componentWillMount() {
    fetch( apiBaseURL + '/categories' )
      .then( response => response.json() )
      .then( data => this.setState({jokesCategories: data}) )
  }

  render() {
    const { jokesCategories } = this.state;

    const categories = (
      <div>
        {jokesCategories.map((category, index) => {
          return <Category name={category} key={index} handleClick={this.props.handleClick}/>;
        })}
      </div>
    );
return <div className="categories">{categories ? categories : "Loading..."}</div>;

    
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
