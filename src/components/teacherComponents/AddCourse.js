import React , { useState }from 'react'
import QuizForm from "./QuizForm";
import { addCourse } from "../../services/teacher.service";

function AddCourse() {
  let id="6087f375b0757ab1749fec37";

 
//course---------------------------

    const [courseState, setCourseState] = useState({
        title: "",
        topic: "",
        language: "",
        estimatedTime: "0",
        chapters:[] 
      });

      const handleCourseChange = (e) => {setCourseState({
        ...courseState,
        [e.target.name]: e.target.value,
      });
   
    }



    //chapter--------------------
    const blankChapter =  { 
      chapterTitle: '',
      chapterTime: '',
      chapterFile:'',
      points:'',
       quiz: [] };
    const [chapterState, setChapterState] = useState([
       {...blankChapter}
      ]);
      const addChapter = () => {
        setChapterState([...chapterState, {...blankChapter}]);
      };


      const handleChapterChange = (e) => {
        const updatedChapters = [...chapterState];
        updatedChapters[e.target.dataset.idx][e.target.className] = e.target.value;
        setChapterState(updatedChapters);
      };
//file upload
      const fileType=['application/pdf'];
      const handlePdfFileChange=(e)=>{
        let selectedFile=e.target.files[0];
        if(selectedFile){
          if(selectedFile&&fileType.includes(selectedFile.type)){
                    chapterState[e.target.id].chapterFile=e.target.files[0].name;
              
          }
          else{
            chapterState[e.target.id].chapterFile="";
        }
        }
        else{
          console.log('select your file');
        }
      }
// save activity---------------------
function setActivity(quiz,chp){
  const chapters = [...chapterState];
 chapters[chp].quiz= quiz;
  setChapterState(chapters);
  courseState.chapters=chapters;

  console.log(courseState);


}
//submit form------------------------
 const submitHandler = (e) => {
  e.preventDefault() //prevent the default behaviour of a form : redirect to other page
  // const formData = new FormData();
  // chapterState.map((obj,index) => {
  //     formData.append('file', chapterState[index].chapterFile,chapterState[index].chapterFile.name);
  //   });
    const newCourse={
      title:courseState.title,
      topic: courseState.topic,
      language: courseState.language,
      estimatedTime: courseState.estimatedTime,
      chapters:chapterState,
      createdBy:id
    }

    addCourse(newCourse)
    .then((response) => {     
       console.log("Added")
      console.log(response)
      })
    .catch((error) => {
        console.log(error);
      });

   // formData.append('course', newCourse);
//var crsData={...newCourse,formData}

  //   axios.post("http://localhost:4000/teacher/addCourse", newCourse, { // receive two parameter endpoint url ,form data 
  // })
  // .then(res => { // then print response status
  //   console.log(res.data)
  // })



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

                    <input type="number" name="estimatedTime" placeholder="Estimated time" 
                          value={courseState.estimatedTime}  
                          // {...register("estimatedTime", {required: true, min: 1, max: 99 })}
                          onChange={handleCourseChange}/>                      
                    {/* {errors.estimatedTime && <span className="error">This field is required</span>} */}


                       {
                            chapterState.map((val, idx) => {
                            const chapterId = `chapter-${idx}`;
                            const chapterTitleId = `chapterTitle-${idx}`;
                            const chapterTimeId = `chapterTime-${idx}`;
                            const chapterFileId = `chapterFile-${idx}`;
                            const quizId = `quiz-${idx}`;
                    
                                return (
                                    <div key={`chapter-${idx}`} className="chapter-box">
                                    <label htmlFor={chapterId}>{`chapter ${idx + 1}`}</label>
                                    <input
                                        type="text"
                                        name={chapterTitleId}
                                        data-idx={idx}
                                        id={chapterTitleId}
                                        className="chapterTitle" 
                                        placeholder="Title"
                                        value={chapterState[idx].chapterTitle}

                                        onChange={handleChapterChange}

                                        />

                                    <input
                                        type="text"
                                        name={chapterTimeId}
                                        data-idx={idx}
                                        id={chapterTimeId}
                                        className="chapterTime" 
                                        placeholder="chapter time"
                                        value={chapterState[idx].chapterTime}
                                        onChange={handleChapterChange}
                                        />

                                    <input
                                        type="file"
                                        name={chapterFileId}
                                        data-idx={idx}
                                        id={idx}
                                        className="chapterFile" 
                                        onChange={handlePdfFileChange}                                        />

                                    <input
                                        type="number"
                                        name={quizId}
                                        data-idx={idx}
                                        id={quizId}
                                        placeholder="Total points"
                                        className="points"
                                        value={chapterState[idx].points}
                                        onChange={handleChapterChange}

                                        />
                                        <div className="quiz-box"> 
                                        <QuizForm 
                                        key={idx}
                                         id={idx}
                                         onChange={quizFields =>setActivity(quizFields,idx)}
                                         
                                         
                                         />
                                        </div>
                                    </div>
                                );      
                            })
                        }
                    <input type="button" name="newChapter" className="action-button-next" value="New chapter" onClick={addChapter}/>
                    <input type="submit" name="submit" className="submit action-button" value="submit" />            
        </fieldset>

</form>
  
</main>
</div>

   
    )
}

export default AddCourse


