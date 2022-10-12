import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.scss";

const Post = ({ children }) => {
  let navigate = useNavigate();

  const redirectToPost = (id) => {
    let path = `${id}`;
    navigate(path);
  };
  return (
    <div className="post">
      <div>
        <div>User ID: {children.userId}</div>
      </div>
      <div className="heading">{children.title}</div>
      <button onClick={() => redirectToPost(children.id)}>View Post</button>
    </div>
  );
};
export default Post;
