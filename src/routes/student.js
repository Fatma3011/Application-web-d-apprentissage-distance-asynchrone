
import React from "react";

import StudentCourse from "../pages/StudentCourse";
import MyCourses from "../pages/MyCourses";
import Home from "../pages/Home";

import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import MyProfile from "../pages/MyProfile";
import MyClassement from "../pages/MyClassement";
import NavBar from "../components/clientComponents/NavBar";
import Footer from "../components/clientComponents/Footer";

import Signin from "../components/clientComponents/Signin";
import {isTokenExpired,getToken} from '../actions/Auth.service'


function Student() {
  const { url } = useRouteMatch();
  let token = getToken();
console.log(token)
  if(!token){
return <Signin auth ='false'/>    } 


    else if ( token && isTokenExpired(token)===false){
    return (
      
        <Router>
            <NavBar  auth="false"/>

              <Switch>
              <Route path={`${url}/home`} exact component={Home} />
              <Route path={`${url}/StudentCourse`} exact component={StudentCourse} />
              <Route path={`${url}/studentcourse/:id`} exact component={StudentCourse} />
              <Route path={`${url}/mycourses/:id`} exact  component={MyCourses} />
              <Route path={`${url}/myprofile/:id`} exact component={MyProfile} />

              <Route path={`${url}/myClassement/:id`} exact component={MyClassement} />

              </Switch>
            <Footer/>
        </Router>
  
  );
}}

export default Student
