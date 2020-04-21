import React from 'react';
import './search.style.css';

const Search = ({ search, updateSearch }) => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
        placeholder="Search your recipe here"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
