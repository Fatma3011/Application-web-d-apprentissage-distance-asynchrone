import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "../components/clientComponents/Signin";
import Signup from "../components/clientComponents/Signup";
import ForgotPassWord from "../components/clientComponents/ForgotPassWord";


function SignPage() {
  return (
    <div>
      <div class="card bg-dark text-white">
 <img src="./assets/img/sign-in.jpg" className="card-img" alt="Beauty" />

        <div class="card-img-overlay">
          <Router>
            <Switch>
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/forgotpassword" exact component={ForgotPassWord} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
