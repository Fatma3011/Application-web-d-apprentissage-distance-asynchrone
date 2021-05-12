import React,{useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import {getInfo} from '../../actions/student.service';
import {getToken, logout} from  '../../actions/Auth.service'
import decode from 'jwt-decode'
function NavBar(props) {
  
  const token =getToken();
  if (token){
 var decoded = decode(token);
 console.log("kakak");
 console.log(decoded.userName);}
 
 
  /* const [data, setData] = useState([
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
      setData(response.data
     );     console.log("eny"); console.log(data.userName);
      }
      
      )
    .catch(console.log("ARRIIIIIIIIJJJJJJ"));
  },[]) */
 if(props.auth){
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
                    <NavLink className="nav-link" to="/student/home">
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/student/home#about">
                   About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/student/home#portfolio">
                Courses

                  </a>
                </li>

               

                <li>
                  <a className="nav-link scrollto" href="/student/home#contact">
                    Contact
                  </a>
                </li>
                <li>
                    <li class="dropdown">
                
                <a href="#"
                  className="nav-link getstarted scrollto "
                  to="home/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                 <b class="bi bi-chevron-down">{decoded.userName}</b>
                </a>
                <ul>
                <li><a href="#">
                   <NavLink className="nav-link" to={`/student/myprofile/${decoded.id}`}>
                       My profile
                       </NavLink></a></li>
                <li><a href="#">
                <NavLink className="nav-link" to={`/student/mycourses/${decoded.id}`}>
                    My courses
                    </NavLink>
                    </a></li>
                   <li><a href="#"> <NavLink className="nav-link" to=""> My certificates </NavLink></a></li>

                <li><a href="/home" onClick={logout} > &nbsp; &nbsp; &nbsp;
Sign out</a></li>
                
              </ul>

              </li>  
                
         
                     
                    </li>      
       
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );}
  else { return(
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
                    <NavLink className="nav-link" to="/student/home">
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
                  <a className="nav-link scrollto" href="/home#portfolio">
                    Courses
                  </a>
                </li>


                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Contact
                  </a>
                </li>
                <li>
                <NavLink
                      className="nav-link getstarted scrollto"
                      to="/signin"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Sign in
                    </NavLink>
                    </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </header>
    
  );
  }
}

export default NavBar;