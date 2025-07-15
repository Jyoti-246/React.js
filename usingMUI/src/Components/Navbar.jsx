import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const login = () => {
    setLoggedIn(true);
    navigate("/dashboard");
  };
  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="nav_bar">
      <Link to={"/"} className="left items">
        WDM
      </Link>
      <div className="right">
        {loggedIn && (
          <>
            <Link className="items" to={"/courses"}>
              Courses
            </Link>
            <Link className="items" to={"/dashboard"}>
              Dashboard
            </Link>
            <Link className="items" to={"/profile"}>
              Profile
            </Link>
            <Link className="items" to={"/mui"}>
              Mui
            </Link>
            <Link
              className="items"
              style={{ fontWeight: "bold", backgroundColor: "gray" }}
              onClick={logout}
            >
              LogOut
            </Link>
          </>
        )}

        {!loggedIn && (
          <>
            <Link className="items" to={"/about"}>
              About
            </Link>
            <Link className="items" to={"/team"}>
              Team
            </Link>
            <Link className="items" to={"/contact"}>
              Contact
            </Link>
            <button
              className="items"
              style={{ fontWeight: "bold", backgroundColor: "gray" }}
              onClick={login}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
