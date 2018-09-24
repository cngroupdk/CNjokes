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
  pageCount = 0;

  componentDidMount() {
    this.props.fetchRandomJoke();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
    this.checkOffset();
  }

  handleScroll = e => {
    const { page } = this.props;
    const { scrolling } = this.state;
    console.log(this.pageCount, page);
    if (scrolling) return;
    if (this.pageCount < page) return;
    this.checkOffset();
  };

  checkOffset = () => {
    // console.log('loading');
    // const lastLi = document.querySelector('ul.jokes > li:last-child');
    const jokeContainer = document.querySelector('.jokes-container');
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 120;
    // console.log(jokeContainer);
    if (pageOffset > jokeContainer.clientHeight) this.loadMore();
  };

  // loadJokes = () => {
  //   const { limit, perPage, page, category } = this.props;
  //   this.props.fetchJokes(limit, perPage, page, category, () => {
  //     this.setState({ scrolling: false });
  //   });
  // };

  loadMore = () => {
    this.setState({ scrolling: true });
    console.log('loading');
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
    const { error, page, category } = this.props;
    console.log(category, 'category');
    return (
      <div>
        <Query
          query={FEED_QUERY}
          variables={{
            categoryName: category,
            limit: 2,
            perPage: 3,
            page: page,
          }}
        >
          {({ loading, _, data }) => {
            console.log(page);
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            console.log(data);
            const jokes = data.category.jokes;
            const pageCount = Math.ceil(jokes.length / 3);
            this.pageCount = pageCount;

            return (
              <div>
                <ul className="jokes">
                  {jokes.map((joke, index) => (
                    <li key={index}>
                      <Joke {...joke} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
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
