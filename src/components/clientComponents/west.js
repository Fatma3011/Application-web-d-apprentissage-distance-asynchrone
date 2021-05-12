import React,{useState,useEffect} from 'react'
import {getAllCourses } from '../../actions/course.service';
import Carousel from './carousel'
function West() {
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

for(let i=0 ; i<=lengthh;i+=3){
    if(i===0){
list.push(<Carousel  title1={data[i].title} title2={data[i+1].title}  title3={data[i+2].title}  active="true"/>)}
else{list.push(<Carousel  title1="aa" title2="bb"  title3="cc" />)}
}
return( <div className="carousel-inner">
{list.map((item,index)=>item)}</div> )



}
export default West;