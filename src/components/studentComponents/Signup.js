import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onsubmit="event.preventDefault()" className="box">
              <h1>Sign up  </h1>
              <p className="text-muted">
                {" "}
              </p>
              <input type="text" name ="username" placeholder="Username" />
              <input type="email" name ="email" placeholder="yourmail@mail.com" />
              <input type="password" name ="password" placeholder="Password" />
              <input type="password" name ="re-password" placeholder="Repeat your password" />
              <button type="submit" className="">
                Sign up
              </button>
              <div className="forgot text-muted" >
               
                <NavLink
                  className="nav-link"
                  to="/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Go back to the login page
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
