import React, { useState } from "react";
import "../css/Search.css";

function Search({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // call backend search
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
