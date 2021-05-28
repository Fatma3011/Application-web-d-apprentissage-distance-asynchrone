import React ,{useEffect, useState} from 'react'
import { getFile } from "../../actions/course.service";
import {  useParams,NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import { getNomchapter,ModifyCourseStudent,getCourse} from '../../actions/student.service';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,

    },
    tabs:{
     background: '#e6e6e6',

    },
    tab:{
      color: 'white',

    }

  }));
function ViewCourse() {
    let {idCourse}= useParams()
    let {idStudent}= useParams()

    
            useEffect(() => {      
  
            if(idCourse !== undefined){  
          
              getNomchapter(idStudent,idCourse)
              .then((response) => {console.log(response)

                for(let i=0;i<response.data[0].coursesNotFinished.length;i++){
                    if (response.data[0].coursesNotFinished[i]._id===idCourse){
                      console.log(response.data[0].coursesNotFinished[i].chapter._id);
                      setChapterstate({
                        score: response.data[0].coursesNotFinished[i].score,
                        chapter:response.data[0].coursesNotFinished[i].chapter,
                        chapterNumber:response.data[0].coursesNotFinished[i].chapterNumber,
                        numberOfChapters:response.data[0].coursesNotFinished[i].numberOfChapters,

                      });
                  }}
              
                console.log(Chapterstate);
                getImg(response.response.image.path);
              })
              .catch((error) => {
                console.log(error);
              });
    
            }
  
  
  
              },[]);
  
  
              
          
              function getImg(imgPath){
                getFile({
                path:imgPath

      
               })
                .then((response) => {
                  console.log(response.data);
                  setImageState(response.data)
                })
                .catch((error) => {
                  console.log(error);
                });
      
              
              }
    
    
              
                
    const classes = useStyles();
  
      const [imageState, setImageState] = useState("");
      const [Chapterstate, setChapterstate] = useState({});

      const [value, setValue] = React.useState(0);
  
  
      const handleChange = (event, newValue) => {
            setValue(newValue);
            console.log(newValue);
          };
       
          
        
      return (
                 <div id="layoutSidenav_content">
          <main >
  
          
            <div id="crsBox" >
                    <div className="crs-header  ">
                      <div  style={{float:"left"}}>
                      {
                            //imageState?(<img alt="" id="image" src={URL.createObjectURL(imageState)} height="100" width="100"/>):''
  
                  }  
                      </div>
                <div style={{  margin: '0 auto'}}>
                {/* <h1 className="fs-title">{ Chapterstate.title }</h1> */}
  
                        
                      <label  className="courseInfo">Topic :{Chapterstate.chapter? Chapterstate.chapter.chapterTitle:"rien"}
                       {/* {  Chapterstate.topic }   */}
                       </label>   
                     
                      <label   className="courseInfo" style={{marginLeft:'400px'}}>Score: {Chapterstate.score? Chapterstate.score:"rien"}
                          {/* Time : { Chapterstate.estimatedTime } hours */}
                          </label> 
                      
  
                 </div>
  <br/>
                 <div className="crs-row"  >
                  <div className={classes.root}>
                 
                 <AppBar position="static" color="default">
          <Tabs
          className={classes.tabs}
            value={value}
           onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
  
  
  
  {/* { Chapterstate.chapter?(
                    
                                                        return(
                                                        
                                                             <Tab 
                                                             wrapped label={item.chapterTitle} 
                                                              value={index} />
                                                                       
                                                        )
                                                          
                                                        
                                                                          
                                         ):''                 
   
                                        }
            */}
        
          </Tabs>
        </AppBar>
         { Chapterstate.chapter?(
       
                   <MainPanel value={value} chapter={Chapterstate.chapter} chapterNumber={Chapterstate.chapterNumber} score={Chapterstate.score} numberOfChapters={Chapterstate.numberOfChapters}/>                  
    
                   ):''                 
                  } 
  
        </div>
  
  
                    </div>
             </div>
        </div>
  
   
  </main>
  </div>
  
      )
  
  
  }
  
  
  export default ViewCourse
  
  
  
  function MainPanel(props) {
    let {idCourse,idStudent}= useParams()

    const {  chapter,chapterNumber,score,numberOfChapters} = props;
  const [pdfFile,setPdfFile]=useState('');
  const [value, setValue] = React.useState(0);
  const [finstate, setFinstate] = useState("false");
 // const [long, setLong] = useState();
  
    useEffect(() => {   
      getFile({
        
        path:chapter.chapterFile.path
       })
        .then((response) => {
          console.log(response.data);
          setPdfFile(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
  
    },[chapter]) 
  
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
      console.log(newValue);
    };
    const handleClick=()=> {
      console.log("arijjjjjjjj clicked");
      console.log(chapterNumber);
      getCourse(idCourse)
      .then((response)=>{
        console.log(" getCourse ")
         console.log(response.data.image)
         console.log(response.data.chapters.length)
         console.log(chapterNumber)
         console.log(numberOfChapters);   

       
        let attributs={
          title : response.data.title,
          topic: response.data.topic,
          estimatedTime: response.data.estimatedTime,
          language: response.data.language,
          image: response.data.image,
          id: response.data._id,
          chapter: response.data.chapters[chapterNumber],
          chapterNumber : chapterNumber+1,
          score:score,
          description: response.data.description,
          createdBy : response.data.createdBy,
        }
        console.log(attributs)
        console.log("debut add")
        ModifyCourseStudent(attributs,idStudent)
        .then(()=>{console.log("debut add")})
        .catch(()=>{console.log("errr add")})
       // if((chapterNumber+1)===response.data.chapters.length){setFinstate("true");console.log("fin");console.log(finstate);}
        //else {setFinstate("false");console.log("mch fin")}
       // console.log(finstate)
    })
  .catch(()=>{console.log("khraj")})};
    return (
  <>
      <AppBar position="static" color="default">
      <Tabs
            value={value}
           onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard "
          >
  
        <Tab icon={<InsertDriveFileIcon />} label="Course" value={0} style={{minWidth:"50%"}}/>                                      
        <Tab icon={<AssignmentIcon />}  label="Quiz" value={1} style={{minWidth:"50%"}}/>
                                                                       
               
        
          </Tabs>
        </AppBar>
        <br/>
      <div className="frameBox">
  {!value?(
        pdfFile?(<iframe id="viewer"  className="frame" src={URL.createObjectURL(pdfFile)}/> ):''
  )
  
  :(<><Quiz questions={chapter.quiz} total={chapter.quiz.length}/>

{(chapterNumber!==numberOfChapters)?(<a href="#" className="btn btn-style-1 " onClick={handleClick}>  <NavLink
                      className="nextChapter"
                      to="/student/course/:idStudent/:idCourse"
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >Next chapter</NavLink></a>  ):(<a href="#" className="btn btn-style-1 ">  <NavLink
                    className="nextChapter"
                    to="/student/course/:idStudent/:idCourse"
                    
                    activeStyle={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >View Score</NavLink></a>)} </>
                    )
  
  
  }
      
      </div>
      </>
    );
  }
  
  
  function Quiz(props){
  const {questions ,total}=props;
  let list1=[];
  let list=[];
  return  questions.map((ques, i)=> (
  
    <div key={i}>
                 
                          <div style={{marginBottom: "9px"}}>
       
     <Accordion   expanded={true}>
  
       <AccordionSummary   aria-controls="panel1c-content"  id="panel1c-header" >
       <div >
       <Typography gutterBottom variant="h5" component="h2">
           Question {i+1} / {total} </Typography>   
       </div>
      
       </AccordionSummary>
   
     
     <AccordionDetails >
    
     <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
         <div style={{display: 'flex',flexDirection:'row', alignItems:'flex-start', marginLeft:'-13px'}}>
         
         <Typography component="h3">
         {ques.questionText}
            </Typography>  
              
        </div>  
        <br/>
           
  
           <div style={{width: '100%'}}>
           {ques.options.map((op, j)=>(
            <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-13px'}}>
  
                <Radio 
                               value={ques.options[j].value}

               checked={ques.answerKey ===ques.options[j].value}
                 
               />  
     
                   <span style={{padding:'8px'}} >
                {ques.options[j].optionText} 
            </span>
  
            </div>
            list.push()       
            list1.push()   
           ))}  
           </div>  
           
  
          
         </div>
         <Divider />
  
     </AccordionDetails>
     
  </Accordion>
    
     </div>  
  </div>
         
  
  )
  )
  
  }