import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Client from "./Client";
import Teacher from "./Teacher";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Client} />
        <Route path="/teacher"  component={Teacher} />
        {/* <Route path={`/readchapter`}  exact component={ReadChapter} /> */}




      </Switch>
    </Router>
  );
}

export default Routes;