import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Header = () => {

  const [mode, setMode] = useTheme()

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="">
          <Link to={"/"}>Where in the World?</Link>
        </h2>
        <p
          onClick={() => {
            if (localStorage.getItem("mode") == "dark") {
              localStorage.setItem("mode", "")
              setMode("")
            } else {
              localStorage.setItem("mode", "dark")
              setMode("dark")
            }
          }}
          className="dark-light-mode"
        >
          <span>
            {mode == "dark" ? (
              <i className="fa-regular fa-sun" />
            ) : (
              <i className="fa-regular fa-moon" />
            )}
          </span>
          &nbsp;&nbsp;
          <span className="mode-name">
            {mode == "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
