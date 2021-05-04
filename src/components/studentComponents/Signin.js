import React from "react";
import { NavLink } from "react-router-dom";

function Signin() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onsubmit="event.preventDefault()" className="box">
              <h1>Sign In </h1>
              <p className="text-muted">
              
                Please enter your login and password!
              </p>
              <input type="text" name placeholder="Username" />
              <input type="password" name placeholder="Password" />
              <div className="forgot text-muted" >
              <NavLink
                      className="nav-link"
                      to="/forgotpassword"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white"}}
                    >
                Forgot password?
                    </NavLink>
              </div>
              <button type="submit" className="">
                Sign in
              </button>
              <div className="forgot text-muted" >
              <NavLink
                      className="nav-link"
                      to="/signup"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white"}}
                    >
                Sign up ?
                    </NavLink>
              </div>
           
            </form>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Signin;
