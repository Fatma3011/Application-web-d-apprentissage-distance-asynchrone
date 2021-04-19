import React from "react";
import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import SignPage from "../pages/SignPage";

import Home from "../pages/Home";
import StudentCourse from "../pages/StudentCourse";


import SwiperPart from "../components/studentComponents/SwiperPart";

function ClientRoute() {
  return (

   
   <Router>
       <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/StudentCourse" exact component={StudentCourse} />
        <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />
        <Route path="/swiper" exact component={SwiperPart} />
        </Switch>
        </Router>
    
  );
}

export default ClientRoute;