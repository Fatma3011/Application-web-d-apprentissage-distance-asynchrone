import React from "react";

function Signin() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onsubmit="event.preventDefault()" className="box">
              <h1>Sign In </h1>
              <p className="text-muted">
                {" "}
                Please enter your login and password!
              </p>
              <input type="text" name placeholder="Username" />
              <input type="password" name placeholder="Password" />
              <a className="forgot text-muted" href="#">
                Forgot password?
              </a>
              {/* <input type="submit" name defaultValue="Login" href="#" /> */}
              <button type="submit" className="">
                Sign in
              </button>
              <div className="col-md-12">
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoTwitter" title="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoGoogle" title="Google +">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Signin;
