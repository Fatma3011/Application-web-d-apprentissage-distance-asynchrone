import React from 'react'

function Carousel1(props) {
    return (            
      <div className="row">


      <div className="col-md-4 mb-3">
          
      <div className="card">
        <img className="img-fluid" alt="100%x280" src="https:images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" />
             
        <div className="card-body">

          <h4 className="card-title">{props.title1}</h4>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
    </div>
         
    <div className="col-md-4 mb-3">
  
      <div className="card">
        <img className="img-fluid" alt="100%x280" src="https:images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698" />
        <div className="card-body">
          <h4 className="card-title">{props.title2}</h4>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
   

      <div className="card">
        <img className="img-fluid" alt="100%x280" src="https:images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a" />
        <div className="card-body">
          <h4 className="card-title">{props.title3}</h4>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
      </div>
 
      </div>
   
    )
}

export default Carousel1
