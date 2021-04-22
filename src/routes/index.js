import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Client from "./Client";
import Admin from "./Admin";

function Routes() {
  return (
    <Router>
      
      <Switch>
        
        <Route path="/home"  component={Client} />
        <Route path="/admin"  component={Admin} />  
         
        

      </Switch>
    </Router>
  );
}

export default Routes;