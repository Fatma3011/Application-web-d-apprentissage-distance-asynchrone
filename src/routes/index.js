import React from 'react'
import { BrowserRouter as Router,Route,  Switch } from "react-router-dom";
import SignPage from "../pages/SignPage";

import Student from  './student'

function Routes() {
  return (
    <>
    <Router>
      
      <Switch>
        <Route path="/student"  component={Student} />
        <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />

      </Switch>
     

      </Router>
      
    </>
  )
}

export default Routes

