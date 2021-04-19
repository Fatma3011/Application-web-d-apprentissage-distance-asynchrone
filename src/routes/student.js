
import React from "react";

import StudentCourse from "../pages/StudentCourse";
import MyCourses from "../pages/MyCourses";

import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import MyProfile from "../pages/MyProfile";
import MyClassement from "../pages/MyClassement";
import Footer from "../components/clientComponents/Footer";
import NavBar from "../components/studentComponents/NavBar";


function Student() {
  const { url } = useRouteMatch();

  return (
    
      <Router>
        <NavBar/>
<Switch>
<Route path={`${url}/studentcourse`} exact component={StudentCourse} />

 <Route path={`${url}/mycourses`} exact component={MyCourses} />
 <Route path={`${url}/myprofile`} exact component={MyProfile} />

 <Route path={`${url}/myClassement`} exact component={MyClassement} />

</Switch>
<Footer/>
</Router>
  
  );
}

export default Student
