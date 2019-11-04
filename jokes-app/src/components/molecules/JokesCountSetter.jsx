import React from 'react';

export function JokesCountSetter({ countNumber, countSetter }) {
  const categorySelected = event => {
    let count = parseInt(event.target.value);

    if (isNaN(count)) {
      count = 0;
    } else if (count < 1) {
      count = 1;
    } else if (count > 25) {
      count = 25;
    }

    countSetter(count);
  };

  return (
    <div className="count-setter-component">
      <span>
        Number of jokes you'd like to see:
        <input
          className="count-input"
          type="number"
          min="1"
          onChange={categorySelected}
          value={countNumber}
          max="25"
        />
        <span className="info">(25&nbsp;max)</span>
      </span>
    </div>
  );
}
