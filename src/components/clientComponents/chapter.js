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
import { getNomchapter,ModifyCourseStudent,getCourse,updateScore} from '../../actions/student.service';

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
  
  
  
 
        
          </Tabs>
        </AppBar>
         { Chapterstate.chapter?(
       
                   <MainPanel value={value} chapter={Chapterstate.chapter} chapterNumber={Chapterstate.chapterNumber} score1={Chapterstate.score}  numberOfChapters={Chapterstate.numberOfChapters}/>                  
    
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
    const {chapter,chapterNumber,score1,numberOfChapters} = props;
  const [pdfFile,setPdfFile]=useState('');
  const [value, setValue] = React.useState(0);
  const [finstate, setFinstate] = useState("false");
 // const [long, setLong] = useState();
 // var totalScore=parseInt(score1);
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
   

    // function saveScore(score){
    //   totalScore+=score;
    //   console.log(totalScore)
    // }
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
          score:score1,
          description: response.data.description,
          createdBy : response.data.createdBy,
        }
        console.log(attributs)
        console.log("debut add")
        ModifyCourseStudent(attributs,idStudent)
        .then(()=>{console.log("debut add")})
        .catch(()=>{console.log("errr add")})

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
  
  :(<><Quiz questions={chapter.quiz} total={chapter.quiz.length} score={score1}/>

{(chapterNumber!==numberOfChapters)?(<><a href="#" className="btn btn-style-1 " onClick={handleClick}>  <NavLink
                      className="nextChapter"
                      to="/student/course/:idStudent/:idCourse"
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >Next chapter</NavLink></a>  
                   </>
                    
                    
                    
                    ):(<>
                  
<div>
  <div className="container d-flex justify-content-center">
    <div className="row">
      <div className="col-md-6"> <button type="button" className="btn  " data-toggle="modal" data-target="#myModal"><a href="#" className="btn btn-style-1 ">  
                  View Score</a></button> </div>
    </div>
  </div>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="card">
        <div className="text-right cross"> <i className="fa fa-times" /> </div>
        <div className="card-body text-center"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />
          <h4>CONGRATULATIONS!</h4>
          <p>You have successfully completed this course!</p>  <p>your total score is:<b>{score1}</b></p>
          <a href="/home" className="btn btn-style-1 " > 
          <NavLink
                      className="nextChapter"
                      to="/student/home"
                      
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >Next chapter</NavLink></a>  
        </div>
      </div>
    </div>
  </div>
</div>

                  
                  
                  
                  </>)} </>
                    )
  
  
  }
      
      </div>
      </>
    );
  }
  
  
  function Quiz(props){
    let {idCourse,idStudent}= useParams()
 const [clicked,setClicked]=useState(false)
  const {questions ,total,score}=props;
  const list=[]
  const listAK=[]
  const listP=[]
useEffect(()=>{},[clicked])
  const handleClick=()=> {
    var sco=0;
    for(let i=0;i<listP.length;i++){sco+=listP[i]}
    console.log(sco)
    var scoree = parseInt(score)
    setClicked(!clicked)
    updateScore(sco,scoree,idStudent,idCourse)
  .then(()=>{console.log("debut modification")})
  .catch(()=>{console.log("errr modif")})
  window.location.reload();
  }




  // const [score,setScore]=useState([])

  // for (let i=0;i<questions.length;i++){
  //   list.push(questions.answerKey)
  // }
  console.log(questions)

  return (<>
    <div>

{ questions.map((ques, i)=> (
  
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
                            onChange={(e)=>{
                             
                                  
                list[i]=e.target.value;
                listAK[i]=ques.answerKey;
                if (list[i]===listAK[i]){listP[i]=parseInt(ques.points);
                } else{listP[i]=0;}

                              console.log(list)
                              console.log(listAK)
                              console.log(listP)


                            }

                              }
                            //  checked={list[i]===ques.options[j].value}

             />  
                 <span style={{padding:'8px'}} >
              {ques.options[j].optionText} 
          </span>
  
          </div>
              
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
    </div>
    <a href="#" className="btn btn-style-1 " onClick={handleClick}> Submit</a></>
  
  ) 
  
  }