import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Client from "./Client";
import Admin from "./Admin";
import Teacher from "./Teacher";
=======

import Client from "./Client";
import Teacher from "./Teacher";

>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

import Form from "../components/adminComponents/Form";
import Page401 from "../components/adminComponents/Page401";
function Routes() {
 

  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        
        <Route path="/admin" component={Admin} />

        <Route path="/home" component={Client} />

        <Route path="/form" component={Form} />
        
        <Route path="/admin_nonauthentifie" component={Page401} />

        <Route path="/teacher" component={Teacher} />
=======
        <Route path="/" exact component={Client} />
        <Route path="/teacher"  component={Teacher} />
  


>>>>>>> 1cbf61bc3c0411ea3377a74de152a17244168e85

      </Switch>
    </Router>
  );
}

export default Routes;
