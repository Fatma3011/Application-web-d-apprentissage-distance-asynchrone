  import { set } from 'mongoose';
import React,{useState,useEffect} from 'react'
 import {getAllCourses ,getCoursesByLevel} from './../actions/course.service';
 import Carousel1 from '././clientComponents/carousel1'

 function Courses() {

 
  
  const [data, setData] = useState([{}]);
  const [lengthh, setLengthh] = useState();
 
 const handlerClick=(level)=>{
  getCoursesByLevel(level)
  .then(response=>{console.log(response);
    
     setData(response.data);
       setLengthh(response.data.length);
      console.log(lengthh);

    }
      )
      .catch(()=>{
        console.log("err");

      })
    
  

}
const list=[]
  useEffect(() => {
 
    getCoursesByLevel('II1')
    .then(response=>{
      console.log(response);
       setData(response.data);
         setLengthh(response.data.length);
        console.log(lengthh);

      })

      
    },[]);


    for(let i=0 ; i<lengthh;i+=3){
      if(i===0){
        
  if (lengthh===1 )
  {list.push(<div className="carousel-item active "><Carousel1  first={data[i]}   /></div>);}
  else if (lengthh===2 )
  {list.push(<div className="carousel-item active "><Carousel1  first={data[i]} second={data[i+1]}   /></div>);}
  else if(lengthh===3) {list.push(<div className="carousel-item active "><Carousel1  first={data[i]} second={data[i+1]}  third={data[i+2]}  /></div>);}
}

  else{list.push(<div className="carousel-item "><Carousel1   first={data[i]} second={(i+1<lengthh)?data[i+1]:null}  third={(i+2<lengthh)?data[i+2]:null} /></div>)}
  console.log(list);}
     return (


 <main id="main">
    <section id="portfolio" className="portfolio">
<div className="container">
  <div className="section-title" data-aos="fade-left">
  <h2>Courses</h2>
     <p>Learn how to search, find and choose your perfect course<br/>
    You can find many content creation tools such as PDF documents, text,quizz and video content.</p>
  </div>
  <div className="row" data-aos="fade-up" data-aos-delay={100}>
    <div className="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
        <li data-filter="*" className="filter-active" onClick={()=>{handlerClick('II1')}}>II1</li> 
        <li data-filter=".filter-app" onClick={()=>{handlerClick('II2')}}>II2</li>
        <li data-filter=".filter-card" onClick={()=>{handlerClick('II3')}}>II3</li>
        <li data-filter=".filter-card" >M1</li>
        <li data-filter=".filter-card" >M2</li>

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
   
    {list.map((item)=>item)}
    
  
    
         </div>

</div>
</div>
</div>
     </div>
  
 </section>
         
       
     
         
          
          
  </div>
      
     </section>
   </main>















 
// //     const [listc2, setlistc2] = useState([]);
// //  const [listc22, setlistc22] = useState([]);
// //   const [listc23, setlistc23] = useState([]);

// //const [lengthh, setLengthh] = useState([]);
//   const listLength=[]
//   //const listc1=[]

//   const listc1=[]

//   const listc2=[]
//   const listc3=[]

// const list1=[]
// const list2=[]
// const list3=[]

//   useEffect(() => {
 
//     getAllCourses()
//     .then(response=>{
//       console.log(response.data);

//       for(let i=0;i<response.data.length;i++){
// if(response.data[i].level==="II1"){       listc1.push(response.data[i]);
// }
// else if(response.data[i].level==="II2"){listc2.push(response.data[i])}
// else{listc3.push(response.data[i])}



//       }
      
//       //  setlistc2(response.listc2);
//       listLength[0]=listc1.length;
//      // listLength[1]=listc2.length; listLength[2]=listc3.length;

//         console.log(listLength);
//         console.log(listc1);})
//         for(let i=0 ; i<listLength[0];i+=3){
//           if(i===0){
           
//      if (listLength[0]===1 )   {list1.push(<div className="carousel-item active "><Carousel1  first={listc1[i]}   /></div>);}
//      else if (listLength[0]===2 )
//      {list1.push(<div className="carousel-item active "><Carousel1  first={listc1[i]} second={listc1[i+1]}   /></div>);}
//       else if(listLength[0]===3) {list1.push(<div className="carousel-item active "><Carousel1  first={listc1[i]} second={listc1[i+1]}  third={listc1[i+2]}  /></div>);}
//     }
   
//      else{list1.push(<div className="carousel-item "><Carousel1   first={listc1[i]} second={(i+1<listLength[0])?listc1[i+1]:null}  third={(i+2<listLength[0])?listc1[i+2]:null} /></div>)}   console.log(list1);}
      
//     },[]);



//   //    for(let i=0 ; i<listLength[1];i+=3){
// //      if(i===0){
      
// // if (listLength[1]===1 )
// //  {list2.push(<div className="carousel-item active "><Carousel1  first={listc2[i]}   /></div>);}
// //  else if (listLength[1]===2 )
// //  {list2.push(<div className="carousel-item active "><Carousel1  first={listc2[i]} second={listc2[i+1]}   /></div>);}
// //  else if(listLength[1]===3) {list2.push(<div className="carousel-item active "><Carousel1  first={listc2[i]} second={listc2[i+1]}  third={listc2[i+2]}  /></div>);}
// //  }

// //  else{list2.push(<div className="carousel-item "><Carousel1   first={listc2[i]} second={(i+1<listLength[1])?listc2[i+1]:null}  third={(i+2<listLength[1])?listc2[i+2]:null} /></div>)}
// //  console.log(list2);} 
// //  for(let i=0 ; i<listLength[2];i+=3){
// //    if(i===0){
    
// //  if (listLength[2]===1 )
// // {list3.push(<div className="carousel-item active "><Carousel1  first={listc3[i]}   /></div>);}
// //  else if (listLength[2]===2 )
// //  {list3.push(<div className="carousel-item active "><Carousel1  first={listc3[i]} second={listc3[i+1]}   /></div>);}
// //  else if(listLength[2]===3) {list3.push(<div className="carousel-item active "><Carousel1  first={listc3[i]} second={listc3[i+1]}  third={listc3[i+2]}  /></div>);}
// //  }

// //  else{list3.push(<div className="carousel-item "><Carousel1   first={listc3[i]} second={(i+1<listLength[2])?listc3[i+1]:null}  third={(i+2<listLength[2])?listc3[i+2]:null} /></div>)}
// //  console.log(list3);}
//      return (


//  <main id="main">
//     <section id="portfolio" className="portfolio">
// <div className="container">
//   <div className="section-title" listc2-aos="fade-left">
//     <h2>Our Courses</h2>
//     <p>Learn how to search, find and choose your perfect course<br/>
//     You can find many content creation tools such as PDF documents, text,quizz and video content.</p>
//   </div>
//   <div className="row" listc2-aos="fade-up" listc2-aos-delay={100}>
//     <div className="col-lg-12 d-flex justify-content-center">
//       <ul id="portfolio-flters">
//         <li listc2-filter="*" className="filter-active">ii1</li> 
//         <li listc2-filter=".filter-app">ii2</li>
//         <li listc2-filter=".filter-card">ii3</li>
       
//       </ul>
//     </div>
//   </div>

       
     
//   <section className="pt-5 pb-5">
//    <div className="container">
//      <div className="row">
// <div className="col-6">
//   <h3 className="mb-3"> </h3>
// </div>
// <div className="col-6 text-right">
//   <a className="btn mb-3 mr-1 flech" href="#carouselExampleIndicators2" role="button" listc2-slide="prev">
//     <i className="fa fa-arrow-left" />
//   </a>
//   <a className="btn mb-3 flech " href="#carouselExampleIndicators2" role="button" listc2-slide="next">
//     <i className="fa fa-arrow-right" />
//   </a>
// </div>
    

// <div className="col-12">
//   <div id="carouselExampleIndicators2" className="carousel slide" listc2-ride="carousel">
//     <div className="carousel-inner">
   
//     {list1.map((item)=>item)}
    
  
    
//          </div>

// </div>
// </div>
// </div>
//      </div>
  
//  </section>
         
       
     
         
          
          
//   </div>
      
//      </section>
   
//    </main>

)
 }

 export default Courses;
 