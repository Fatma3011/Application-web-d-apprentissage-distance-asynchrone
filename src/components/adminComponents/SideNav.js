import React from 'react'

function SideNav() {
    return (
      <div id="fixe">
          <div id="layoutSidenav" >
    <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    
      <br/><br/><br/>
        <div className="sb-sidenav-menu ">
          <div className="nav">
            <a className="nav-link" href="index.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-user-shield" />
              </div>
              Admin
            </a>
            <div className="sb-sidenav-menu-heading">Teachers</div>
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-list" />
              </div>
              List of teachers
              
            </a>
            
            
            <div className="sb-sidenav-menu-heading">Students</div>
            <a className="nav-link" href="charts.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-list" />
              </div>
              List of students 
            </a>
            
            <div className="sb-sidenav-menu-heading">Courses</div>
          </div>
        </div>
        <br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/>
                    
                   
        </nav></div></div>
      </div>
    );
}

export default SideNav
