import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomJoke } from '../../../actions';

class CategoryListItem extends Component {
  render() {
    const { categoryName } = this.props;
    return (
      <div
        onClick={() => this.props.fetchRandomJoke(categoryName)}
        className="row category-item"
      >
        {categoryName}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomJoke },
)(CategoryListItem);
