import React, { Component } from 'react';
import JokeListItem from './JokeListItem';
import Pagination from 'react-js-pagination';

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
    console.log(data);

    if (data.length === 0) return <div>Loading...</div>;

    return data.slice(0, 10).map((item, index) => {
      return <JokeListItem key={index} joke={item} />;
    });
  }

  render() {
    return (
      <div className="column">
        {this.renderJokes()}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.data.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default List;
