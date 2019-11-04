import React from 'react';

export function SearchInput({ searchQuery, onSearch }) {
  return (
    <div className="joke-search input-group">
      <div className="input-group-prepend">
        <span className="search-icon-box input-group-text ">
          <span className="search-icon">&#9740;</span>
        </span>
      </div>
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={onSearch}
      />
    </div>
  );
}
