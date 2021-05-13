import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "./Client";
import Admin from "./Admin";
import Teacher from "./Teacher";

import Form from "../components/adminComponents/Form";
import Page401 from "../components/adminComponents/Page401";
function Routes() {
 

  return (
    <Router>
      <Switch>
        
        <Route path="/admin" component={Admin} />

        <Route path="/home" component={Client} />

        <Route path="/form" component={Form} />
        
        <Route path="/admin_nonauthentifie" component={Page401} />

        <Route path="/teacher" component={Teacher} />

      </Switch>
    </Router>
  );
}

export default Routes;
