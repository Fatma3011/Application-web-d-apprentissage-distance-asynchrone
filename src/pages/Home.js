import React from 'react'

import Cover from '../components/clientComponents/Cover'
import CountSection from '../components/clientComponents/CountSection'
import About from '../components/clientComponents/About'
import Courses from '../components/Courses'


function Home() {
    return (
      <>
        <Cover />
        <About />
        <CountSection />
        <Courses/>

      </>
    );
}

export default Home
