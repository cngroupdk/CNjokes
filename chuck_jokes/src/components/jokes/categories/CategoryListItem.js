import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomJoke } from '../../../actions';

class CategoryListItem extends Component {
  checkSelected() {
    const { state } = this.props;
    if (state.jokes[0]) {
      if (state.jokes[0].category) {
        return state.jokes[0].category[0];
      }
    }
  }
  render() {
    const { categoryName } = this.props;
    let selected = this.checkSelected();
    return (
      <div
        onClick={() => this.props.fetchRandomJoke(categoryName)}
        className={`row category-item ${
          categoryName === selected ? 'active' : ''
        }`}
      >
        {categoryName}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(
  mapStateToProps,
  { fetchRandomJoke },
)(CategoryListItem);
