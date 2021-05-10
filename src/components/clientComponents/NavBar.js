import React,{useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import {getInfo} from '../../actions/student.service';
import {logout} from  '../../actions/Auth.service'
function NavBar(props) {
  
  const [data, setData] = useState([
    {
      userName: "",
      email: "",
      
      
    },
  ]);
  const {id} = useParams();
  //getValues
  useEffect(() => {
    console.log(id);
 
    getInfo(id)
    .then(response=>{console.log(response);
      
      console.log(response.data.userName);
      setData(
        {
          userName: response.data.userName,
          email:response.data.email,
        })}
      
      )
    .catch(console.log("ARRIIIIIIIIJJJJJJ"));
  },[])
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a href="index.html">
                  <span>E-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#services">
                    Courses
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Search
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Contact
                  </a>
                </li>
                <li>
                  {props.auth ? (  <li class="dropdown">
                
                <a href="#"
                  className="nav-link getstarted scrollto "
                  to="/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                 AK <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                <li><a href="#">
                   <NavLink className="nav-link" to="/student/myprofile">
                       My profile
                       </NavLink></a></li>
                <li><a href="#">
                <NavLink className="nav-link" to="/student/mycourses">
                    My courses
                    </NavLink>
                    </a></li>
                <li><a href="#">My certificates </a></li>

                <li><a href="#"> <NavLink className="nav-link" to="/home" onClick={logout}>

Sign out</NavLink> </a></li>
                
              </ul>

             
            </li>  ): (
                
                <NavLink
                  className="nav-link getstarted scrollto"
                  to="/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Sign in
                </NavLink>)  }
                 
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;