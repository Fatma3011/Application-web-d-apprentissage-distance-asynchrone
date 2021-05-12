  import React,{useState,useEffect} from 'react'
 import {getAllCourses } from './../actions/course.service';
 import Carousel1 from '././clientComponents/carousel1'

 function Courses() {
 
  const [data, setData] = useState([{}]);
  const [lengthh, setLengthh] = useState();
 

const list=[]
  useEffect(() => {
 
    getAllCourses()
    .then(response=>{console.log(response);
      
       setData(response.data)
   /*     {data.map((item,index)=>{if(index%3===0){console.log('%3=0'); console.log(item.title);}
      else if (index % 3===1){console.log('%3=1');
    console.log(item.title);}
      else if (index % 3===2){console.log('%3=2'); console.log(item.title);}
       else if (index%3==1){console.log(item.title+"bb")}
        else if (index%3==2){console.log(item.title+"cc")}
      })} */
        let k=response.data.length;
        setLengthh(k);
        console.log(lengthh);})

      
    },[]);
    for(let i=0 ; i<lengthh;i+=3){
      if(i===0){
        
  list.push(<div className="carousel-item active "><Carousel1  title1={data[i].title} title2={data[i+1].title}  title3={data[i+2].title}  /></div>);}
  else{list.push(<div className="carousel-item "><Carousel1   title1={data[i].title} title2={data[i+1].title}  title3={data[i+2].title} /></div>)}
  }
     return (


 <main id="main">
    <section id="portfolio" className="portfolio">
<div className="container">
  <div className="section-title" data-aos="fade-left">
    <h2>Our Courses</h2>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>
  <div className="row" data-aos="fade-up" data-aos-delay={100}>
    <div className="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
        <li data-filter="*" className="filter-active">Healthcare</li> 
        <li data-filter=".filter-app">Professional Development</li>
        <li data-filter=".filter-card">Technology</li>
        <li data-filter=".filter-web"> Cloud and IT</li>
        <li data-filter=".filter-web"> Computer Science</li>
        <li data-filter=".filter-web">Data science</li>
        <li data-filter=".filter-web">Engineering & Physical Sciences</li>
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

     )
 }

 export default Courses;
 