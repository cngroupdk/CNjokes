import React, { Component } from "react";
import { connect } from "react-redux";
import Joke from "./joke";
import { fetchJokes, fetchRandomJoke } from "../../actions";

class JokeList extends Component {
  constructor(props) {
    super(props);
    const { limit, page, perPage, category } = props;
    this.state = {
      limit,
      page,
      perPage,
      scrolling: false,
      category
    };
  }

  componentDidMount() {
    this.props.fetchRandomJoke();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
    // Dotaz
    //this.checkOffset();

  }

  static getDerivedStateFromProps(props, state) {
    if (props.category !== state.category) {
      return {
        limit: props.limit,
        page: props.page,
        perPage: props.perPage,
        category: props.category,
        scrolling: false
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  handleScroll = e => {
    const { pages } = this.props;
    const { scrolling, page } = this.state;
    if (scrolling) return;
    if (pages <= page) return;
    this.checkOffset();
  };

  checkOffset = () => {
    const lastLi = document.querySelector("ul.jokes > li:last-child");
    console.log(lastLi);
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 120;
    console.log(lastLi.offsetTop, lastLi.clientHeight);
    console.log(window.pageYOffset, window.innerHeight);

    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    // if(window.pageYOffset >= window.innerHeight) this.loadMore();
  };

  loadJokes = () => {
    const { perPage, page } = this.state;
    this.props.fetchJokes(this.props.limit, perPage, page, this.props.category, () => {
      this.setState({ scrolling: false });
    });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadJokes
    );
  };

  render() {
    const {data, error }= this.props;

    if (!data) {
      return <div>loading...</div>;
    }

    if (error && error === 'empty_string') {
      return <div className="error-container">No results for empty query</div>;
    }

    return (
      <div>
        <h2>Jokes</h2>
        <ul className="jokes">
          {data.map(joke => (
            <li key={joke.id}>
              <Joke {...joke} />
            </li>
          ))}
        </ul>
        {this.props.random && (
          <div className="load-more-container">
            <a onClick={this.loadJokes}>Load more...</a>
          </div>
        )}
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
    error: state.error
    
    
  };
};

export default connect(
  mapStateToProps,
  { fetchJokes, fetchRandomJoke }
)(JokeList);
