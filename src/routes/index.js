import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignPage from "../pages/SignPage";

import Home from "../pages/Home";
import Footer from "../components/studentComponents/Footer";
import NavBar from "../components/studentComponents/NavBar";
import SwiperPart from "../components/studentComponents/SwiperPart";
import AdminNavBar from "../components/adminComponents/AdminNavBar";
import SideNav from "../components/adminComponents/SideNav";
import Admin from "../pages/Admin";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path={["/signup", "/signin", "/forgotpassword"]} exact component={SignPage} />
        <Route path="/swiper" exact component={SwiperPart} />
        <Route path={["/admin"]}  component={Admin} />
        

      </Switch>
    </Router>
  );
}

export default Routes;