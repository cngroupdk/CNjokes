import React, { Component } from 'react';
import JokeListItem from './JokeListItem';
import Pagination from 'react-js-pagination';
<<<<<<< HEAD
=======
import { switchPage } from '../../../actions';
import { connect } from 'react-redux';
import './list.css';
>>>>>>> 75e37cac97a5bea4767f8f313b2eec199b66a485

class List extends Component {
  //this is temporary state -> move into redux
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  renderJokes() {
    const { data } = this.props;

    if (data.length === 0) return <div className="loader">Loading...</div>;

    return data.slice(0, 10).map((item, index) => {
      return <JokeListItem key={index} joke={item} />;
    });
  }

  render() {
    return (
      <div className="column">
<<<<<<< HEAD
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.data.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        {this.renderJokes()}
=======
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
>>>>>>> 75e37cac97a5bea4767f8f313b2eec199b66a485
      </div>
    );
  }
}

export default List;
