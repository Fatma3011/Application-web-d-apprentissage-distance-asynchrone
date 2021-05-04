import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
    
  <div id="layoutSidenav_nav"  >
  <nav className="sb-sidenav accordion sb-sidenav-dark " id="sidenavAccordion" >
  
      <div className="sb-sidenav-menu ">
        <div className="nav">
          <div className="nav-link" >
            <div className="sb-nav-link-icon">
              <i className="fas fa-user-shield" />
            </div>
            Welcome Teacher
          </div >
          <div className="sb-sidenav-menu-heading">Courses</div>
          <div
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            
            <div className="sb-nav-link-icon">
              <i className="fas fa-list" />
            </div>
            <NavLink  className="nav-link" to="/teacher/courseList">
            Courses
                    </NavLink>
            
          </div>
       
          
          
          
          
      
        </div>
      </div>
      
                  
                 
      </nav></div>
     
    )
}

export default Sidebar
