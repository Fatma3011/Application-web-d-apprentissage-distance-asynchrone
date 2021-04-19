import React from 'react'

import Cover from '../components/studentComponents/Cover'
import Courses from '../components/studentComponents/Courses'
import CountSection from '../components/studentComponents/CountSection'
import About from '../components/studentComponents/About'
import Recommended from '../components/studentComponents/Recommended'


function Home() {
    return (
      <>
        <Cover />
        <About />
        <CountSection />
        <Recommended />
        <Courses />

      </>
    );
}

export default Home
