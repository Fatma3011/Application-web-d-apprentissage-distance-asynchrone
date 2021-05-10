import React from 'react'
import { BrowserRouter as Router,Route,  Switch } from "react-router-dom";
import { getToken,isTokenExpired } from '../actions/Auth.service';
import SignPage from "../pages/SignPage";

import Student from  './student'
import ClientRoute from  './client'




function Routes() {
 
  return (
    <>
    
    <Router>
      
      <Switch>

        <Route path="/student"   component={Student} />
        <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />
        <Route path="chome"  component={ClientRoute} />

      </Switch>
     

      </Router>
      
    </>
  )
};



export default Routes

