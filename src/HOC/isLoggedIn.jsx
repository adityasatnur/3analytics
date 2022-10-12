import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

const isLoggedIn = (Component) => {
  return function IsLoggedIn() {
    const [cookieValue, setCookieValue] = useState(null);
    useEffect(() => {
      let data = getCookie("login");
      setCookieValue(data);
    }, []);
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    const navigate = useNavigate();

    function checkcookie(cookieValue) {
      if (cookieValue) return <Component />;
      navigate("/login");
      return null;
    }
    return <>{checkcookie(cookieValue)}</>;
  };
};

export default isLoggedIn;
