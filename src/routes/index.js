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
        <Route >
        <img
            src="./assets/img/404.jpg"
            class="card-img"
            alt="Beauty-picture"
          />
          <h1 align="center" className="mt-6">NOT FOUND 404 !!</h1>
        </Route>  
        

      </Switch>
    </Router>
  );
}

export default Routes;