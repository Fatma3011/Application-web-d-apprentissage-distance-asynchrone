import React from 'react'

import Cover from '../components/clientComponents/Cover'
import Courses from '../components/clientComponents/Courses'
import CountSection from '../components/clientComponents/CountSection'
import About from '../components/clientComponents/About'
import Recommended from '../components/clientComponents/Recommended'


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
