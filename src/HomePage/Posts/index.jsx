import React from "react";
import Post from "./Post";

const Posts = ({ filteredPosts, activePageNumber }) => {
  const indexOfLastRecord = activePageNumber * 10;
  const indexOfFirstRecord = indexOfLastRecord - 10;
  const currentRecords = filteredPosts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  return (
    <>
      {currentRecords.length > 0 &&
        currentRecords.map((post, index) => <Post key={index}>{post}</Post>)}
    </>
  );
};
export default Posts;
