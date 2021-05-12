import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";


import Home from "../pages/Home";

import SignInPage from "../pages/SignInPage";
import ForgotPassWordPage from "../pages/ForgotPassWordPage";
import SignUpPage from "../pages/SignUpPage";
import NavBar from "../components/studentComponents/NavBar";

function Client() {
  const { url } = useRouteMatch();

  return (
 
            <Router>
                <NavBar/>
                <Switch>
                  <Route path={`${url}/signin`} exact component={SignInPage } />
                  <Route path={`${url}/signup`} exact component={SignUpPage} />
                  <Route path={`${url}/forgotpassword`} exact component={ForgotPassWordPage }/>
                  <Route path={`${url}`} exact component={Home} />
                </Switch>
            </Router>
          
  );
}

export default Client;
