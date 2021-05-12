import React , { useState }from 'react'
import AddChapter from "./AddChapter";
import { addCourse } from "../../services/teacher.service";
import {withRouter ,useHistory} from 'react-router-dom';

function AddCourse() {
   let idUser="6087f375b0757ab1749fec37";
const history=useHistory();
 
//course---------------------------

    const [courseState, setCourseState] = useState({
        title: "",
        topic: "",
        language: "",
        description: "",
        estimatedTime: "0",
        chapters:[{
                  chapterTitle: "",
                  chapterTime: "",
                  chapterFile:"",
                  points:"",
                  quiz: [
                      {questionText: "",
                      options : [
                          {optionText: "" ,value:""}
                      ], 
                      open: true,
                      points:"0",
                      answerKey:""
                  }
            
                  ]
        }] 
      });

      const handleCourseChange = (e) => {setCourseState({
        ...courseState,
        [e.target.name]: e.target.value,
      });
   
    }




    const chapter =  { 
      chapterID: 0,
  };
    const [chaptersState, setChaptersState] = useState([
       {...chapter}
      ]);
      const addChapter = () => {
        setChaptersState([...chaptersState, {chapterID:chaptersState.length}]);
      };

      function saveChapter(info,index){   //save the order of the chapters
        console.log(info);

          //const chapters = [...chapterInfo];
          const chapterss = courseState.chapters;

         chapterss[index]= info;
  
          //setChapterInfo(chapters);
          setCourseState({...courseState,chapters:chapterss})
        //setSavedChapter(savedChapter+1);
        

        }


        const [image ,setImage]=useState('')
        //const fileType=['application/jpeg','application/PNG'];
        
        const handleImageChange=(e)=>{
          //let selectedImage=e.target.files[0];
        
          //if(selectedImage){
           
        
           // if(selectedImage&&fileType.includes(selectedImage.type)){
                      setImage(e.target.files[0]);
        
            //}
        //     else{
        //       console.log('select a valid type ');
        //     }
        //   }
        //   else{
        //     console.log('select your file');
        //   }
        // }
        
        

        }


      const submitHandler = (e) => {
        e.preventDefault() //prevent the default behaviour of a form : redirect to other page
        const fd = new FormData() 


        fd.append('createdBy',idUser);
        fd.append('title', courseState.title)
        fd.append('topic', courseState.topic)
        fd.append('language', courseState.language)
        fd.append('description', courseState.description)
        fd.append('estimatedTime',courseState.estimatedTime)
        fd.append('chapters',JSON.stringify(courseState.chapters) )
         fd.append('image', image)

         addCourse(fd)
         .then((response) => {     
           console.log("added successfully")
           console.log(response)
           history.push('/teacher/courses')           
          })
         .catch((error) => {
             console.log("adding failed");
           });


        }

              
    return (
        <div id="layoutSidenav_content">
        <main>
      
        
            <form id="msform" onSubmit={submitHandler} encType='multipart/form-data' method='post'>
                <fieldset>
                    <h2 className="fs-title">New Course</h2>
                    <input type="text" name="title" placeholder="Title"  
                          value={courseState.title} 
                          // {...register("title", { required: true, maxLength: 20 })}
                          onChange={handleCourseChange}/>
                    {/* {errors.title && <span className="error">This field is required</span>} */}

                    <input type="text" name="topic" placeholder="Topic"
                          value={courseState.topic} 
                          // {...register("topic", { required: true, maxLength: 20 })}
                          onChange={handleCourseChange}/>
                    {/* {errors.topic && <span className="error">This field is required</span>} */}

                    <input type="text" name="language" placeholder="Language" 
                          value={courseState.language} 
                          // {...register("language", { required: true, maxLength: 20 })}
                          onChange={handleCourseChange}/>
                    {/* {errors.language && <span className="error">This field is required</span>} */}

                    <input type="text" name="description" placeholder="Description" 
                          value={courseState.description} 
                          onChange={handleCourseChange}/>



                    <input type="number" name="estimatedTime" placeholder="Estimated time" 
                          value={courseState.estimatedTime}  
                          // {...register("estimatedTime", {required: true, min: 1, max: 99 })}
                          onChange={handleCourseChange}/>                      
                    {/* {errors.estimatedTime && <span className="error">This field is required</span>} */}
                    <input
            type="file"
            name="image" 
            onChange={handleImageChange}                                       
             />
                       {
                            chaptersState.map((val, idx) => {
                            
                    
                                return (
                                  
                                    <AddChapter key ={idx}   onChange={chapter =>saveChapter(chapter,idx)}/>

                              ) ;    
                            })
                        }
                    <input type="button" name="newChapter" className="action-button-next" value="Add chapter" 
                    onClick={
                      addChapter
                    }
                    />
                    <input type="submit" name="submit" className="submit action-button" value="create course" />            
        </fieldset>

</form>
  
</main>
</div>

   
    )
}

export default withRouter(AddCourse)


