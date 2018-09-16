import React, { Component } from "react";
import { connect } from "react-redux";
import Joke from "./joke";
import { fetchJokes } from "../../actions";

class JokeList extends Component {
  constructor(props) {
    super(props);
    const { limit, page, perPage } = props;
    this.state = {
      limit,
      page,
      perPage,
      scrolling: false
    };
  }

  componentWillMount() {
    this.loadJokes();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { pages } = this.props;
    const { scrolling, page } = this.state;
    if (scrolling) return;
    if (pages <= page) return;
    const lastLi = document.querySelector("ul.jokes > li:last-child");
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
  };

  loadJokes = () => {
    const { limit, perPage, page } = this.state;
    this.props.fetchJokes(limit, perPage, page, () => {
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
    const jokes = this.props.data;

    if (!jokes) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <ul className="jokes">
          {jokes.map(joke => (
            <li key={joke.id}>
              <Joke {...joke} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, limit, page, pages, perPage } = state.jokes;
  return {
    data,
    limit,
    page,
    pages,
    perPage
  };
};

export default connect(
  mapStateToProps,
  { fetchJokes }
)(JokeList);
