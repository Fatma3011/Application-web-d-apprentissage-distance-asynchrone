import React from 'react'
import CountUp from 'react-countup'


function CountSection() {
    return (
        <>
        <main id="main">
       <section id="counts" className="counts">
  <div className="container">
    <div className="row counters">
      <div className="col-lg-4 col-6 text-center">
      <CountUp start={0} end={450} />
        <p>Students</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
      <CountUp start={0} end={112} />
        <p>Teachers</p>
      </div>
      
      <div className="col-lg-4 col-6 text-center">
      <CountUp start={0} end={756} />
        <p>Visitor/day</p>
      </div>
    </div>
  </div>
</section>

</main>
            
        </>
    )
}

export default CountSection