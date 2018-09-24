import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import Joke from './joke';
import { fetchJokes, fetchRandomJoke, setPageNumber } from '../../actions';
import './pagination.css';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FEED_QUERY = gql`
  query getCategory(
    $categoryName: String
    $limit: Int
    $page: Int
    $perPage: Int
  ) {
    category(name: $categoryName) {
      name
      jokes(limit: $limit, page: $page, perPage: $perPage) {
        value
      }
      total
    }
  }
`;

class JokeList extends Component {
  // all the code in the comments is deprecated, migrating to GQL

  // state = {
  //   scrolling: false,
  // };

  // componentDidMount() {
  //   this.props.fetchRandomJoke();
  //   this.scrollListener = window.addEventListener('scroll', e => {
  //     this.handleScroll(e);
  //   });
  //   this.checkOffset();
  // }

  // handleScroll = e => {
  //   const { page } = this.props;
  //   const { scrolling } = this.state;
  //   if (scrolling) return;
  //   if (this.pageCount < page) return;
  //   this.checkOffset();
  // };

  // checkOffset = () => {
  //   // const lastLi = document.querySelector('ul.jokes > li:last-child');
  //   const jokeContainer = document.querySelector('.jokes-container');
  //   const pageOffset = window.pageYOffset + window.innerHeight;
  //   const bottomOffset = 120;
  //   if (pageOffset > jokeContainer.clientHeight) this.loadMore();
  // };

  // loadJokes = () => {
  //   const { limit, perPage, page, category } = this.props;
  //   this.props.fetchJokes(limit, perPage, page, category, () => {
  //     this.setState({ scrolling: false });
  //   });
  // };

  // loadMore = () => {
  //   this.setState({ scrolling: true });
  //   this.props.increasePageNumber(this.props.page);
  //   this.setState({ scrolling: false });
  //   // this.loadJokes();
  // };

  //   render() {
  //     const { data, error } = this.props;

  //     if (!data) {
  //       return <div>loading...</div>;
  //     }

  //     if (error && error === 'empty_string') {
  //       return <div className="error-container">No results for empty query</div>;
  //     }

  //     return (
  //       <div>
  //         <h2>Jokes</h2>
  //         <ul className="jokes">
  //           {data.map(joke => (
  //             <li key={joke.id}>
  //               <Joke {...joke} />
  //             </li>
  //           ))}
  //         </ul>
  //         {this.props.random && (
  //           <div className="load-more-container">
  //             <a onClick={this.loadJokes}>Load more...</a>
  //           </div>
  //         )}
  //       </div>
  //     );
  //   }
  //

  handllePageChange = e => {
    this.props.setPageNumber(e);
  };
  render() {
    const { error, page, category, perPage } = this.props;
    return (
      <div>
        <Query
          query={FEED_QUERY}
          variables={{
            categoryName: category,
            limit: 2,
            perPage: 10,
            page: page,
          }}
        >
          {({ loading, _, data }) => {
            if (loading) return <div>Loading, please wait</div>;
            if (error) return <div>Error</div>;
            const jokes = data.category.jokes;

            return (
              <div>
                <ul className="jokes">
                  {jokes.map((joke, index) => (
                    <li key={index}>
                      <Joke {...joke} />
                    </li>
                  ))}
                </ul>
                <div className="row pagination-container">
                  <Pagination
                    activePage={page}
                    itemsCountPerPage={perPage}
                    totalItemsCount={data.category.total}
                    pageRangeDisplayed={5}
                    onChange={this.handllePageChange.bind(this)}
                  />
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { page, perPage } = state.jokes;
  const { category } = state.jokeOptions;
  // const { category, limit, random } = state.jokeOptions;

  // return {
  //   data,
  //   page,
  //   pages,
  //   perPage,
  //   category,
  //   limit,
  //   random,
  //   error: state.error,
  // };
  return { page, perPage, category };
};

export default connect(
  mapStateToProps,
  { fetchJokes, fetchRandomJoke, setPageNumber },
)(JokeList);
