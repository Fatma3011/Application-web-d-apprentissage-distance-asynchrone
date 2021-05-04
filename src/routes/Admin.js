import React  from 'react'
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import AdminAddTeacher from "../pages/Admin-AddTeacher";
import AdminTeacher from "../pages/AdminTeacher";
import AdminCourseList from "../pages/Admin-CourseList";
import AdminProfile from '../pages/AdminProfile';
import AdminStudent from '../pages/Admin-Student';
import AdminNavBar from '../components/adminComponents/AdminNavBar';
import SideNav from '../components/adminComponents/SideNav';
import EditProfile from '../components/adminComponents/EditProfile';
import EditPassword from '../components/adminComponents/EditPassword';
import {userService} from '../services/auth.header'
import Page401 from '../components/adminComponents/Page401';

function Admin() {
    const { url } = useRouteMatch();
 
    // let token = userService.getToken();

    // if(!token){
    //   window.location='admin_nonauthentifie'
    // } 
    // else if ( token && userService.isTokenExpired(token)==true){
      return (
      <>
        <div className="row">
        <AdminNavBar />
        </div>
        <div className="row">
        <div className="col-lg-2">
          <SideNav />
        </div>
        <div className="col-lg-10">
            <Router>
              <Switch>
                <Route path={`${url}/teacherlist`} exact component={AdminTeacher } />
                <Route path={`${url}/addteacher`} exact component={AdminAddTeacher } />
                <Route path={`${url}/courselist`} exact component={AdminCourseList } />
                <Route path={`${url}/studentlist`} exact component={AdminStudent } />
                <Route path={`${url}/profile`} exact component={AdminProfile } />
                <Route path={`${url}/editprofile`} exact component={EditProfile } />
                <Route path={`${url}/editpassword`} exact component={EditPassword } />
              </Switch>
            </Router>
            </div>
            </div>
      </>
);
    // }
    
}

export default Admin


// import React, { Component ,  } from 'react'
// import {
//   BrowserRouter as Router,
//   useRouteMatch,
//   Route,
//   Switch,
// } from "react-router-dom";
// import AdminAddTeacher from "../pages/Admin-AddTeacher";
// import AdminTeacher from "../pages/AdminTeacher";
// import AdminCourseList from "../pages/Admin-CourseList";
// import AdminProfile from '../pages/AdminProfile';
// import AdminStudent from '../pages/Admin-Student';
// import AdminNavBar from '../components/adminComponents/AdminNavBar';
// import SideNav from '../components/adminComponents/SideNav';
// import EditProfile from '../components/adminComponents/EditProfile';
// import EditPassword from '../components/adminComponents/EditPassword';
// import {userService} from '../services/auth.header'


// export default class Admin extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 0 };

//   }

//   componentDidMount(){
//     let token = userService.getToken();
//     if(!token){
//           window.location='/nonauthentifie'
//       } 
//   }
//   render= ({ match: { url } }) => {
//     return (
//       <>
//         <div className="row">
//         <AdminNavBar />
//         </div>
//         <div className="row">
//         <div className="col-lg-2">
//           <SideNav />
//         </div>
//         <div className="col-lg-10">
//             <Router>
            
//               <Switch>
//                 <Route path={`${url}/teacherlist`} exact component={AdminTeacher } />
//                 <Route path={`${url}/addteacher`} exact component={AdminAddTeacher } />
//                 <Route path={`${url}/courselist`} exact component={AdminCourseList } />
//                 <Route path={`${url}/studentlist`} exact component={AdminStudent } />
//                 <Route path={`${url}/profile`} exact component={AdminProfile } />
//                 <Route path={`${url}/editprofile`} exact component={EditProfile } />
//                 <Route path={`${url}/editpassword`} exact component={EditPassword } />
//               </Switch>
//             </Router>
//             </div>
//             </div>
//         </>
//     )
//   }
// }
