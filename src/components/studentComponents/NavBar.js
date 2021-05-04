import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a >
                  <span>E-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" >
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to="/">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link scrollto" to="/">
                    Courses
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link scrollto" to="/">
                    Search
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link scrollto" to="/">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a >
                    <NavLink
                      className="nav-link getstarted scrollto"
                      to="/signin"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Sign in
                    </NavLink>
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
