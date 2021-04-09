import React from 'react'

function NavBar() {
    return (
       
        
         
    <>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container">
      <div className="header-container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light"><a href="index.html"><span>E-learning</span></a></h1>
          </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Recommended</a></li>
        
            <li><a className="nav-link scrollto" href="#contact">Courses</a></li>

            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Sign in</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </div>
  </header>
  
      </>  
    )
}

export default NavBar
