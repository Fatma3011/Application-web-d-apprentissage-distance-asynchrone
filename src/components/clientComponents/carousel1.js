import React ,{useState,useEffect} from 'react'
import {getFile} from '../../actions/course.service'

function Carousel1(props) {
  const [firstimageState, setFirstImageState] = useState("");
  const [secondimageState, setSecondImageState] = useState("");
  const [thirdimageState, setThirdImageState] = useState("");


function getImage(path){
  getFile({
  path:path
 })
  .then((response) => {
    console.log(response.data);
    setFirstImageState(response.data)
  })
  .catch((error) => {
    console.log(error);
  });}
  

  function getImage2(path){
    getFile({
    path:path
  
  
   })
    .then((response) => {
      console.log(response.data);
      setSecondImageState(response.data)
    })
    .catch((error) => {
      console.log(error);
    });}
   
    function getImage3(path){
      getFile({
      path:path
    
    
     })
      .then((response) => {
        console.log(response.data);
        setThirdImageState(response.data)
      })
      .catch((error) => {
        console.log(error);
      });}

useEffect(() => { 
        if(props.first){
          const path1=props.first.image.path;
        
getImage(path1)}
if(props.second){
  const path2=props.second.image.path;

getImage2(path2)}
if(props.third){
  const path3=props.third.image.path;

getImage3(path3)}

      },[])
  
return (     
   
      <div className="row">

{props.first?
      <div className="col-md-4 mb-3">
          
      <div className="card">
      {
                          firstimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(firstimageState)} width="100%" heigth="100%"/>):''

                }  
             
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
      {
                          secondimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(secondimageState)} width="100%" heigth="100%"/>):''

                }          <div className="card-body">
        <h4 className="card-title">{props.second.title}</h4>
          <p className="card-text topic">{props.second.topic}</p>
          <p className="card-text description">{props.second.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.second.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.second.language}</p>
           <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
    </div>:null}
    
{props.third?
    <div className="col-md-4 mb-3">
   

      <div className="card">
      {
                          thirdimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(thirdimageState)} width="100%" heigth="100%"/>):''

                }         
                 <div className="card-body">
        <h4 className="card-title">{props.third.title}</h4>
          <p className="card-text topic">{props.third.topic}</p>
          <p className="card-text description">{props.third.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.third.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.third.language}</p>

           <a href="#" className="btn btn-style-1 ">start</a>

        </div>
      </div>
      </div>:null}
 
      </div>
   
    )
}

export default Carousel1
