import React from 'react';

const SearchBar = ({ searchId, setSearchId, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
