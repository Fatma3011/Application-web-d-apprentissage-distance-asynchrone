import React from 'react'
import NavBar from '../components/studentComponents/NavBar'
import Footer from '../components/studentComponents/Footer'
import Cover from '../components/studentComponents/Cover'
import Courses from '../components/studentComponents/Courses'
import CountSection from '../components/studentComponents/CountSection'
import About from '../components/studentComponents/About'
import Recommended from '../components/studentComponents/Recommended'
// import Aa from '../components/studentComponents/Aa'

function Home() {
    return (
        <>
          <NavBar/>
        <Cover/>
        <About/>
         <CountSection/>
         <Recommended/>
         <Courses/>
    

        <Footer/> 
        </>
    )
}

export default Home
