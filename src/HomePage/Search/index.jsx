import React, { useState } from "react";
import "./Search.scss";
const Search = ({ filter }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => filter(search)}>Search</button>
    </div>
  );
};
export default Search;
