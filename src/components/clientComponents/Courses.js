import React,{useState,useEffect} from 'react'
import {getAllCourses } from '../../actions/course.service';
import Carousel from './carousel'
function Courses() {
  const [data, setData] = useState([{}]);
  const [lengthh, setLengthh] = useState();
  const [vara,setVara] = useState();
  const [varb,setVarb] = useState(0);

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
        const n=(k/3)+1;
        setVara(n);
        console.log(lengthh);
        console.log(vara);

      
    }
     
      
      )
    .catch(console.log("ARRIIIIIIIIJJJJJJ"))
  }
,[])

for(let i=0 ; i<lengthh;i+=3){
    if(i===0){
list.push(<Carousel  title1={data[i].title} title2={data[i+1].title}  title3={data[i+2].title}  active="true"/>)}
else{list.push(<Carousel  title1="aa" title2="bb"  title3="cc" />)}
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
{list.map((item)=>item)}</div>
            </div>
        </div>
      </div>
    
  </div>
</section>
         
       
     
         
          
          
        </div>
      
    </section>{/* End Portfolio Section */}
  </main>
  
    )
}

export default Courses
 





































//  import React,{useState,useEffect} from 'react'
// import {getAllCourses } from '../../actions/course.service';

// function Courses() {
//   const [data, setData] = useState([{}]);
//   const [length, setLength] = useState();
//   const [vara,setVara] = useState();
//   const [varb,setVarb] = useState(0);


//   useEffect(() => {
 
//     getAllCourses()
//     .then(response=>{console.log(response);
      
//        setData(response.data)
//    /*     {data.map((item,index)=>{if(index%3===0){console.log('%3=0'); console.log(item.title);}
//       else if (index % 3===1){console.log('%3=1');
//     console.log(item.title);}
//       else if (index % 3===2){console.log('%3=2'); console.log(item.title);}
//        else if (index%3==1){console.log(item.title+"bb")}
//         else if (index%3==2){console.log(item.title+"cc")}
//       })} */
//         let k=response.data.length;
//         setLength(k);
//         const n=(k/3)+1;
//         setVara(n);
//         console.log(length);
//         console.log(vara);

      
//     }
     
      
//       )
//     .catch(console.log("ARRIIIIIIIIJJJJJJ"))
//   }
// ,[])
//     return (<>



   
   
 
//   <main id="main">
//     <section id="portfolio" className="portfolio">
//       <div className="container">
//         <div className="section-title" data-aos="fade-left">
//           <h2>Our Courses</h2>
//           <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//         </div>
//         <div className="row" data-aos="fade-up" data-aos-delay={100}>
//           <div className="col-lg-12 d-flex justify-content-center">
//             <ul id="portfolio-flters">
//               <li data-filter="*" className="filter-active">Healthcare</li> 
//               <li data-filter=".filter-app">Professional Development</li>
//               <li data-filter=".filter-card">Technology</li>
//               <li data-filter=".filter-web"> Cloud and IT</li>
//               <li data-filter=".filter-web"> Computer Science</li>
//               <li data-filter=".filter-web">Data science</li>
//               <li data-filter=".filter-web">Engineering & Physical Sciences</li>
//             </ul>
//           </div>
//         </div>

       
     
//         <section className="pt-5 pb-5">
//   <div className="container">
//     <div className="row">
//       <div className="col-6">
//         <h3 className="mb-3"> </h3>
//       </div>
//       <div className="col-6 text-right">
//         <a className="btn mb-3 mr-1 flech" href="#carouselExampleIndicators2" role="button" data-slide="prev">
//           <i className="fa fa-arrow-left" />
//         </a>
//         <a className="btn mb-3 flech " href="#carouselExampleIndicators2" role="button" data-slide="next">
//           <i className="fa fa-arrow-right" />
//         </a>
//       </div>
    

//       <div className="col-12">
//         <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
//           <div className="carousel-inner">
//           {data.map((item,index)=>(  ((index/3)<vara)?(
               
//             <div className={"carousel-item" + (index/3===0? 'active' : '')}>

//               <div className="row">)
//                 <div className="col-md-4 mb-3">
//                 {(index%3===0)?(

//                   <div className="card">
//                     <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" />
                   
//                     <div className="card-body">

//                       <h4 className="card-title">{item.title}</h4>
//                       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                       <a href="#" className="btn btn-style-1 ">start</a>

//                     </div>
//                   </div>):null}
//                 </div>
               
//                 <div className="col-md-4 mb-3">
//                 {(index%3==1)?(
//                   <div className="card">
//                     <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698" />
//                     <div className="card-body">
//                       <h4 className="card-title">{item.title}Special title treatment</h4>
//                       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                       <a href="#" className="btn btn-style-1 ">start</a>

//                     </div>
//                   </div>):null}
//                 </div>
//                 <div className="col-md-4 mb-3">
//                 {(index%3===2)?(

//                   <div className="card">
//                     <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a" />
//                     <div className="card-body">
//                       <h4 className="card-title">{item.title}</h4>
//                       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                       <a href="#" className="btn btn-style-1 ">start</a>

//                     </div>
//                   </div>):null}
//                 </div>
//               </div> 
//          </div>
//          ):null))}
//             <div className="carousel-item">
//             </div> 
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
         
       
     
         
          
          
//         </div>
      
//     </section>{/* End Portfolio Section */}
//   </main>
//   </>
//     )
// }

// export default Courses
 