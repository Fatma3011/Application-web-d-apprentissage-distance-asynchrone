import React from "react";
import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import SignPage from "../pages/SignPage";
import {isTokenExpired,getToken} from '../actions/Auth.service'
import NavBar from '.././components/clientComponents/NavBar'
import Home from "../pages/Home";
import StudentCourse from "../pages/StudentCourse";
import Footer from "../components/clientComponents/Footer";


//import SwiperPart from "../components/studentComponents/SwiperPart";

function ClientRoute() {
  
    const { url } = useRouteMatch();
    let token = getToken();
  console.log(token)
    if(!token){
  return (<Router>
    <NavBar />
  <Switch>
  <Route path={""} exact component={Home} />
   <Route path="/StudentCourse" exact component={StudentCourse} />
   <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />
   </Switch>
   <Footer/>
   </Router> )  } 
  
  
  
}

export default ClientRoute;