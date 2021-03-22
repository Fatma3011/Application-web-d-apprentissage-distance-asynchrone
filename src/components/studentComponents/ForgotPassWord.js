import React from 'react'

function ForgotPassWord() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form onsubmit="event.preventDefault()" className="box">
                <h1>Forgot your pass word  ? </h1>
                <p className="text-muted">
                  Your mail
                </p>
              
                <input type="email" name placeholder="yourmail@mail.com" />
                <button type="submit" className="">
                  Send reset password link
                </button>
                <a className="forgot text-muted" href="#">
                Go back to the login page
              </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ForgotPassWord
