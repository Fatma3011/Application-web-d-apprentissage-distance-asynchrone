import React from "react";
import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import {isTokenExpired,getToken} from '../actions/Auth.service'
import NavBar from '.././components/clientComponents/NavBar'
import Home from "../pages/Home";
import Footer from "../components/clientComponents/Footer";
import SignUpPage from "../pages/SignUpPage"
import SignInPage from "../pages/SignInPage"
import ClientHome from "../pages/ClientHome";

//import SwiperPart from "../components/studentComponents/SwiperPart";

function ClientRoute() {
  
   const { url } = useRouteMatch();
  /*   let token = getToken();
  console.log(token)
    if(!token){  */ 
  return (<Router>
    
      <Switch>
      <Route path={`${url}/signin`} exact component={SignInPage} />
      <Route path={`${url}/signup`} exact component={SignUpPage} />
      <Route path={`${url}`} exact component={ClientHome} />
      </Switch>

   </Router> )  
  
  
  
}

export default ClientRoute;