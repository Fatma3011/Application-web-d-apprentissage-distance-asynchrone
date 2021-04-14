import React from "react";
import AddTeacher from "../components/adminComponents/AddTeacher";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import AdminNavBar from "../components/adminComponents/AdminNavBar";
import SideNav from "../components/adminComponents/SideNav";
import TeacherList from "../components/adminComponents/TeacherList";

function Admin() {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <div>
      <div className="row">
        <AdminNavBar />
      </div>

      <div className="row">
        <div className="col-lg-2">
          <SideNav />
        </div>
        <div className="col-lg-10">
          <br />
          <br />
          <Router>
            <Switch>
              <Route path={`${url}/teacherlist`} component={TeacherList} />
              <Route path={`${url}/addteacher`} component={AddTeacher} />
              <Route>
                <h1> Not Found !</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Admin;
