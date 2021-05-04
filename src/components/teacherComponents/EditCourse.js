import React , { useState ,useEffect}from 'react'

import { getCourse } from "../../services/teacher.service";
import {  useParams} from "react-router-dom";
import Chapter from './Chapter'


export default function EditCourse(){
    
let {courseID}= useParams()

const [courseState, setCourseState] = useState({});
const [chapterState, setChapterState] = useState();


const getCrs=()=>{
  if(courseID !== undefined){    
    getCourse(courseID)
    .then((response) => {
      setCourseState({
        title: response.response.title,
        topic: response.response.topic,
        language: response.response.language,
        estimatedTime: response.response.estimatedTime,
        chapters:response.response.chapters
      }
      )
      setChapterState(response.response.chapters)

    })
    .catch((error) => {
      console.log(error);
    });
  }
}


    useEffect(() => {
        
     getCrs();

      }, []);
    

  console.log(courseState)


//course---------------------------

      const handleCourseChange = (e) => {setCourseState({
        ...courseState,
        [e.target.name]: e.target.value,
      });
   
    }

    //---------------chapter--------------------
    const blankChapter =  { 
      chapterTitle: '',
      chapterTime: '',
      chapterFile:'',
      points:'',
       quiz: [] 
    };
      const addChapter = () => {
        setChapterState([...chapterState, {...blankChapter}]);
      };




//submit form------------------------
 const submitHandler = (e) => {
  e.preventDefault() 

 }
 
  

              
    return (
        <div id="layoutSidenav_content">
        <main>
      
        
            <form id="msform" onSubmit={submitHandler} encType='multipart/form-data' method='post'>
                <fieldset>
                    <h2 className="fs-title">Edit Course</h2>
                    <input type="text" name="title" placeholder="Title"  
                          value={courseState.title} 
                          onChange={handleCourseChange}/>

                    <input type="text" name="topic" placeholder="Topic"
                          value={courseState.topic} 
                          onChange={handleCourseChange}/>

                    <input type="text" name="language" placeholder="Language" 
                          value={courseState.language} 
                          onChange={handleCourseChange}/>

                    <input type="number" name="estimatedTime" placeholder="Estimated time" 
                          value={courseState.estimatedTime}  
                          onChange={handleCourseChange}/>  
                         
{/* 
                         {
                          courseState.chapters.forEach((element) => 
                            //<Chapter   data={element} />
                            <p>hii</p>
                            )
                         
                        }                         */}
                     
                          
                     
                    <input type="button" name="newChapter" className="action-button-next" value="New chapter" onClick={addChapter}/>
                    <input type="submit" name="submit" className="submit action-button" value="submit" />            
        </fieldset>

</form>
  
</main>
</div>

   
    )
}




