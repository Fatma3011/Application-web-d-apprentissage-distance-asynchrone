import React from 'react'

function Carousel1(props) {
    return (     
   
      <div className="row">

{props.first?
      <div className="col-md-4 mb-3">
          
      <div className="card">
        <img className="img-fluid" alt="100%x280" src=""/>
             
        <div className="card-body">

        <h4 className="card-title">{props.first.title}</h4>
          <p className="card-text topic">{props.first.topic}</p>
          <p className="card-text description">{props.first.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.first.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.first.language}</p>


          <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
    </div>:null}
         
{props.second?
    <div className="col-md-4 mb-3">
  
      <div className="card">
        <img className="img-fluid" alt="100%x280" src="https:images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698" />
        <div className="card-body">
        <h4 className="card-title">{props.second.title}</h4>
          <p className="card-text topic">{props.second.topic}</p>
          <p className="card-text description">{props.second.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.second.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.second.language}</p>

        </div>
      </div>
    </div>:null}
    
{props.third?
    <div className="col-md-4 mb-3">
   

      <div className="card">
        <img className="img-fluid" alt="100%x280" src="https:images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a" />
        <div className="card-body">
        <h4 className="card-title">{props.third.title}</h4>
          <p className="card-text topic">{props.third.topic}</p>
          <p className="card-text description">{props.third.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.third.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.third.language}</p>


        </div>
      </div>
      </div>:null}
 
      </div>
   
    )
}

export default Carousel1
