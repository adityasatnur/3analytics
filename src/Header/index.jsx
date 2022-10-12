import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    let expires = "";
    let date = new Date();
    date.setTime(date.getTime() - 30 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie = `login=; + ${expires}; path=/`;

    navigate("/login");
  };
  return (
    <div className="header">
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
export default Header;
