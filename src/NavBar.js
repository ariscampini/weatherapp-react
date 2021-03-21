import React from "react";
import "./NavBar.css";
import LastUpdated from "./LastUpdated.js";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter a City"
              aria-label="Search"
              size="50px"
            />
            <input type="submit" value="Search" className="searchButton" />
            <div className="col-3" w-100></div>
          </form>
        </div>
      </nav>
      <LastUpdated />
    </div>
  );
}