import React from "react";
import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import SignPage from "../pages/SignPage";
import {isTokenExpired,getToken} from '../actions/Auth.service'
import NavBar from '.././components/clientComponents/NavBar'
import Home from "../pages/Home";
import Courses from "../components/Courses";
import Footer from "../components/clientComponents/Footer";


//import SwiperPart from "../components/studentComponents/SwiperPart";

function ClientRoute() {
  
   const { url } = useRouteMatch();
  /*   let token = getToken();
  console.log(token)
    if(!token){  */ 
  return (<Router>
    <NavBar />
  <Switch>
   <Route path={`${url}/courses`} exact component={Courses} />
   <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />
   <Route path={`${url}`} exact component={Home} />

   </Switch>
   <Footer/>
   </Router> )  
  
  
  
}

export default ClientRoute;