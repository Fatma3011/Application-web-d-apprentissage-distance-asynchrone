 import React,{useState,useEffect} from 'react'
 import {useParams } from "react-router-dom";
 import Carousel1 from '../clientComponents/carousel1'

 import { getMyCourses } from '../../actions/student.service';


function AllCourses() {
 
  const [data, setData] = useState([{}]);
  const [dataF, setDataF] = useState([{}]);
const [lengthh, setLengthh] = useState(0);
const [lengthhF, setLengthhF] = useState(0);


const listFinished=[]
const listNotFinished=[]
const {id} = useParams();


   useEffect(() => {
     console.log(id);

     getMyCourses(id)
     .then(response=>{console.log(response);
      
        setData(response.data.CoursesNotFinished);
        setDataF(response.data.CoursesFinished);
          console.log(data)
         setLengthh(response.data.CoursesNotFinished.length);
         console.log(response.data.CoursesNotFinished.length);
         setLengthhF(response.data.CoursesFinished.length);

     })
     .catch(console.log("ARRIIIIIIIIJJJJJJ"))

      
     },[]);




     for(let i=0 ; i<lengthh;i+=3){

      console.log(lengthh);

         if(i===0){

     if (lengthh===1 )
     {      
      listNotFinished.push(<div className="carousel-item active "><Carousel1  first={data[0]}   /></div>);}
     else if (lengthh===2 )
     {listNotFinished.push(<div className="carousel-item active "><Carousel1  first={data[i]} second={data[i+1]}   /></div>);}
     else if(lengthh===3) {listNotFinished.push(<div className="carousel-item active "><Carousel1  first={data[i]} second={data[i+1]}  third={data[i+2]}  /></div>);}
   }
  
     else{listNotFinished.push(<div className="carousel-item "><Carousel1   first={data[i]} second={(i+1<lengthh)?data[i+1]:null}  third={(i+2<lengthh)?data[i+2]:null} /></div>)}
     }
     for(let i=0 ; i<lengthhF;i+=3){
       if(i===0){
        
   if (lengthhF===1 )
   {listFinished.push(<div className="carousel-item active "><Carousel1  first={dataF[i]}   /></div>);}
   if (lengthhF===2 )
   {listFinished.push(<div className="carousel-item active "><Carousel1  first={dataF[i]} second={dataF[i+1]}   /></div>);}
   else if(lengthh===3){listFinished.push(<div className="carousel-item active "><Carousel1  first={dataF[i]} second={dataF[i+1]}  third={dataF[i+2]}  /></div>);}
 }

   else{listFinished.push(<div className="carousel-item "><Carousel1   first={dataF[i]} second={(i+1<lengthhF)?dataF[i+1]:null}  third={(i+2<lengthhF)?dataF[i+2]:null} /></div>)}
   }
 

 

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
        <li data-filter="*" className="filter-active">Not Finished Courses </li> 
      
     
       
      </ul>
    </div>
  </div>

 
  <section className="pt-5 pb-5">
   <div className="container">
     <div className="row">
<div className="col-6">
  <h3 className="mb-3"> </h3>
</div>
<div className="col-6 text-right">
  <a className="btn mb-3 mr-1 flech" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    <i className="fa fa-arrow-left" />
  </a>
  <a className="btn mb-3 flech " href="#carouselExampleIndicators2" role="button" data-slide="next">
    <i className="fa fa-arrow-right" />
  </a>
</div>
    

<div className="col-12">
  <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
   
    {listNotFinished.map((item)=>item)}
    
  
    
         </div>

</div>
</div>
</div>
     </div>
  
 </section>
         
</div>
</section>{/* End Portfolio Section */}
<section id="portfolio" className="portfolio">
<div className="container">
  
  <div className="row" data-aos="fade-up" data-aos-delay={100}>
    <div className="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
        <li data-filter="*" className="filter-active"> Finished Courses </li> 
      
     
       
      </ul>
    </div>
  </div>

 
  <section className="pt-5 pb-5">
   <div className="container">
     <div className="row">
<div className="col-6">
  <h3 className="mb-3"> </h3>
</div>
<div className="col-6 text-right">
  <a className="btn mb-3 mr-1 flech" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    <i className="fa fa-arrow-left" />
  </a>
  <a className="btn mb-3 flech " href="#carouselExampleIndicators2" role="button" data-slide="next">
    <i className="fa fa-arrow-right" />
  </a>
</div>
    

<div className="col-12">
  <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
   
    {listFinished.map((item)=>item)}
    
  
    
         </div>

</div>
</div>
</div>
     </div>
  
 </section>
         
</div>
</section>{/* End Portfolio Section */}
</main>

      
  </>
        
    )
}

export default AllCourses
