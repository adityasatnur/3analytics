import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Search from "./Search";
import Filter from "./Filter";
import "./Homepage.scss";
import Header from "../Header";
import isLoggedIn from "../HOC/isLoggedIn";
import Loader from "../Loader";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const getPosts = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
      (response) => response.json()
    );

    return data;
  };
  const pageNumber = (val) => {
    setActivePageNumber(Number(val));
  };
  useEffect(() => {
    if (!posts.length) {
      (async () => {
        let data = await getPosts();
        setPosts(data);
        setFilteredPosts(data);
      })();
    }
  }, []);
  const filterHandler = (val) => {
    let items = [];
    posts.forEach((post) => {
      if (post.title.toUpperCase().indexOf(val.toUpperCase()) > -1) {
        items.push(post);
      }
    });
    setFilteredPosts(items);
  };
  const filterByUserID = (val) => {
    let items = posts.filter((post) => post.userId === Number(val));
    setFilteredPosts(items);
  };
  return (
    <>
      {posts.length > 0 ? (
        <div>
          <Header />
          <Search filter={filterHandler} />
          <Filter posts={posts} filterByUserID={filterByUserID} />
          <Posts
            filteredPosts={filteredPosts}
            activePageNumber={activePageNumber}
          />
          {posts.length > 0 && (
            <Pagination
              itemsPerPage={10}
              items={filteredPosts}
              pageNumber={pageNumber}
            />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default isLoggedIn(HomePage);
