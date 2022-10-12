import React, { useState, useEffect } from "react";
import "./Filter.scss";
const Filter = ({ posts, filterByUserID }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let set = new Set();
    posts.forEach((post) => {
      set.add(post.userId);
    });
    let arr = Array.from(set);
    setUsers(arr);
  }, [posts]);
  return (
    <div className="filter">
      <span>Filter By: user ID </span>
      <select onChange={(e) => filterByUserID(e.target.value)}>
        {users &&
          users.map((element, index) => <option key={index}>{element}</option>)}
      </select>
    </div>
  );
};
export default Filter;
