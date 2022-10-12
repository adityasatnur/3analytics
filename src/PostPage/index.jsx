import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Loader from "../Loader";
import isLoggedIn from "../HOC/isLoggedIn";

import "./PostPage.scss";
const PostPage = () => {
  let params = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    if (!(data && data.id)) {
      (async () => {
        let data = await getPost();
        let comments = await getComments();

        setData(data);
        setComments(comments);
      })();
    }
  }, []);
  const getPost = async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    ).then((response) => response.json());

    return data;
  };
  const getComments = async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    ).then((response) => response.json());

    return data;
  };

  return (
    <>
      {data ? (
        <>
          <Header />
          <div className="postPage">
            <div className="post">
              <div>
                User ID: <b>{data && data.userId}</b>
              </div>
              <div className="heading">{data && data.title}</div>
              <div>{data && data.body}</div>
            </div>
            <div className="comments">
              {comments &&
                comments.map((comment, index) => {
                  return (
                    <div key={index}>
                      <div className="name">{comment.name}</div>
                      <div className="email">{comment.email}</div>
                      <div className="body">{comment.body}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default isLoggedIn(PostPage);
