import React, { Component } from 'react';
import { connect } from 'react-redux';
import Joke from './joke';
import { fetchJokes, fetchRandomJoke, increasePageNumber } from '../../actions';

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
    }
  }
`;

class JokeList extends Component {
  state = {
    scrolling: false,
  };

  componentDidMount() {
    this.props.fetchRandomJoke();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
    //this.checkOffset();
  }

  handleScroll = e => {
    const { pages, page } = this.props;
    const { scrolling } = this.state;
    if (scrolling) return;
    if (pages <= page) return;
    this.checkOffset();
  };

  checkOffset = () => {
    const lastLi = document.querySelector('ul.jokes > li:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 120;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  };

  // loadJokes = () => {
  //   const { limit, perPage, page, category } = this.props;
  //   this.props.fetchJokes(limit, perPage, page, category, () => {
  //     this.setState({ scrolling: false });
  //   });
  // };

  loadMore = () => {
    this.setState({ scrolling: true });
    this.props.increasePageNumber(this.props.page);
    this.setState({ scrolling: false });
    // this.loadJokes();
  };

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

  render() {
    const { error, limit } = this.props;
    return (
      <Query
        query={FEED_QUERY}
        variables={{
          categoryName: 'food',
          limit: 2,
          perPage: 10,
          page: 1,
        }}
      >
        {({ loading, _, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          console.log(data);
          const jokes = data.category.jokes;

          return (
            <div>
              <ul>
                {jokes.map((joke, index) => (
                  <li key={index} key={joke.id}>
                    <Joke {...joke} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => {
  const { data, page, pages, perPage } = state.jokes;
  const { category, limit, random } = state.jokeOptions;

  return {
    data,
    page,
    pages,
    perPage,
    category,
    limit,
    random,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchJokes, fetchRandomJoke, increasePageNumber },
)(JokeList);
