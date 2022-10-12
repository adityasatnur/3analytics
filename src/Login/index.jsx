import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [showError, setShowError] = useState(false);

  let navigate = useNavigate();
  const path = `/homepage`;
  const loginUser = () => {
    if (loginData.username === "admin" && loginData.password === "admin@123") {
      var expires = "";
      var date = new Date();
      date.setTime(date.getTime() + 30 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
      navigate(path);
    } else {
      setShowError(true);
    }
    document.cookie = `login = true ${expires}; path=/`;
  };
  const inputHandler = (e) => {
    let data = {
      ...loginData,
      [e.target.name]: e.target.value,
    };
    setLoginData(data);
  };
  return (
    <section id="loginPage">
      <div className="inputBlock">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="username"
          id="userName"
          className="input"
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className="inputBlock">
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          id="password"
          className="input"
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className="inputBlock">
        <button className="btn btn-success" onClick={loginUser}>
          Login
        </button>
      </div>
      {showError ? (
        <div className="error">Invalid UserName or password</div>
      ) : null}
    </section>
  );
};
export default Login;
