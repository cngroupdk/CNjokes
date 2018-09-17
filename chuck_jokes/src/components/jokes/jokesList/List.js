import React, { Component } from 'react';
import JokeListItem from './JokeListItem';
import Pagination from 'react-js-pagination';
import { switchPage } from '../../../actions';
import { connect } from 'react-redux';
import './list.css';

class List extends Component {
  handlePageChange(pageNumber) {
    this.props.switchPage(pageNumber);
  }
  renderJokes() {
    const { data, activePage } = this.props;
    const base = 10;
    const bottom = (0 + activePage - 1) * base;
    const top = base + bottom;

    if (data.length === 0) return <div className="loader">Loading...</div>;

    return data.slice(bottom, top).map((item, index) => {
      return <JokeListItem key={index} joke={item} />;
    });
  }

  render() {
    const { activePage, data } = this.props;
    return (
      <div className="column">
        {this.renderJokes()}
        {data.length !== 0 && (
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { activePage: state.jokesFilter.activePage };
};

export default connect(
  mapStateToProps,
  { switchPage },
)(List);
