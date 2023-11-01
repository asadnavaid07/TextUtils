import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        style={{
          backgroundColor: props.mode === "dark" ? "white" : "black",
          color: props.mode === "dark" ? "black" : "white",
        }}
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "dark" ? "light" : "dark"
        } bg-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
            />
            <label
              className="custom-control-label"
              onClick={props.toggleMode}
              htmlFor="customSwitch1"
            >
           {props.mode==="dark"?"Enable DarkMode":"Disable Dark Mode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Rapp",
  about: "About Us",
};
