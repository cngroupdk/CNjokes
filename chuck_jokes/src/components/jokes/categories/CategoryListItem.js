import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomJoke, selectCategory } from '../../../actions';

class CategoryListItem extends Component {
  render() {
    const { categoryName, category } = this.props;
    return (
      <div
        onClick={() => {
          this.props.fetchRandomJoke(categoryName);
          this.props.selectCategory(categoryName);
        }}
        className={`row category-item ${
          categoryName === category ? 'active' : ''
        }`}
      >
        {categoryName}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { category: state.selectedCategory };
};

export default connect(
  mapStateToProps,
  { fetchRandomJoke, selectCategory },
)(CategoryListItem);
