import React from "react";

function Searchbar({ search, setSearch, onSearch }) {
  return (
    <div className="search-container">

      <div className="search-heading">
        <h2>Find Movies You'll Love</h2>
        <h4>Search for movies by title</h4>
      </div>

      <div className="search-box">

        <span className="search-icon">⌕</span>

        <input
          type="text"
          value={search}
          placeholder="Search movies..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />

        <button onClick={() => onSearch()}>
          Search
        </button>

      </div>

    </div>
  );
}

export default Searchbar;