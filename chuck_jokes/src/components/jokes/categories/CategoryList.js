import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryListItem from './CategoryListItem';
import { fetchCategories } from '../../../actions';

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories &&
          categories.map((category, index) => {
            return <CategoryListItem categoryName={category} key={index} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.data };
};

export default connect(
  mapStateToProps,
  { fetchCategories },
)(CategoryList);
