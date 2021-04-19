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
                <a href="index.html">
                  <span>E-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#services">
                    Courses
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Search
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Contact
                  </a>
                </li>
                <li>
                
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