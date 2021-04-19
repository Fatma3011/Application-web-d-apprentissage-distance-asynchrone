import React from 'react'

function AllCourses() {
    return (
        <>
              <section id="CourseTitle" className="d-flex align-items-center">
        <div className="container  position-relative" data-aos="fade-in" data-aos-delay="200">
          
        <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-left">
        <h2>Your Courses </h2>

        </div>
       </div>
    </section> </main>

        </div>
        </section>
        
             <main id="main">
          
    
    <section id="portfolio" className="portfolio">
      <div className="container">
        
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">Courses Taken </li> 
              <li data-filter=".filter-app">Finished Courses</li>
              <li data-filter=".filter-app">Not finished Courses</li>
           
             
            </ul>
          </div>
        </div>
  
       
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
         

                          <div className="portfolio-wrap">
              <div classname="card" style={{width: '18rem'}}>
              </div>
                            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                      <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-style-1 ">Go somewhere</a>
              </div>




              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
              <div classname="card" style={{width: '18rem'}}>
              </div>
                            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                      <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-style-1 ">Go somewhere</a>
              </div>

              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
                
              </div>


              
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <div classname="card" style={{width: '18rem'}}>
              </div>
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-style-1 ">Go somewhere</a>
              </div>

              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>{/* End Portfolio Section */}
  </main>
 
            
        </>
    )
}

export default AllCourses
