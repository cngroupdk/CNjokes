import React from 'react';

class JokesCountSetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countInputValue: 4,
    };
  }

  countUpdated(e) {
    let count = parseInt(e.target.value);
    this.setState({ countInputValue: count + '' });

    if (isNaN(count)) {
      count = 0;
    } else if (count < 1) {
      count = 1;
      this.setState({ countInputValue: count });
    } else if (count > 25) {
      count = 25;
      this.setState({ countInputValue: count });
    }

    this.props.countSetter(count);
  }

  render() {
    return (
      <div className="count-setter-component">
        <span>
          Number of jokes you'd like to see:
          <input
            className="count-input"
            type="number"
            min="1"
            onChange={this.countUpdated.bind(this)}
            value={this.state.countInputValue}
            max="25"
          />
          <span className="info">(25&nbsp;max)</span>
        </span>
      </div>
    );
  }
}

export default JokesCountSetter;
