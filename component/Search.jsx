import React, { useState } from "react";

const Search = ({ setRequest }) => {
  const [input, setInput] = useState(localStorage.getItem("input") || "");

  function handleInput(e) {
    const value = e.target.value
    localStorage.setItem("input", e.target.value);
    setRequest(value.toLowerCase());
    setInput(value)
  }

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        id="searchInput"
        onChange={handleInput}
        value={input}
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Search;
