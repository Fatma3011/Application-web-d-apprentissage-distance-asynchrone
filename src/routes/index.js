import { BrowserRouter as Router,Route,  Switch } from "react-router-dom";
import { getToken,isTokenExpired } from '../actions/Auth.service';

import Student from  './student'
import ClientRoute from  './client'




function Routes() {
 
  return (
    <>
    
    <Router>
      
      <Switch>

        <Route path="/student"   component={Student} />
        <Route path="/home"   component={ClientRoute} />


      </Switch>
     

      </Router>
      
    </>
  )
};



export default Routes

