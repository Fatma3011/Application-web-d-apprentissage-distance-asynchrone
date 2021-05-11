import React ,{useEffect, useState} from 'react'
import { getCourse ,getImage} from "../../services/teacher.service";
import {  useParams} from "react-router-dom";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function ViewCourse() {
  let {idC}= useParams()
  
          useEffect(() => {      

          if(idC !== undefined){  
        
            getCourse(idC)
            .then((response) => {
               setCourseState({
                title: response.response.title,
                topic: response.response.topic,
                language: response.response.language,
                estimatedTime: response.response.estimatedTime,
                image:response.response.image,
                chapters:response.response.chapters,
              });
              console.log(courseState);
              getImg(response.response.image.path);
            })
            .catch((error) => {
              console.log(error);
            });
  
          }



            },[]);


            
        
            function getImg(imgPath){
              getImage({
                //path:'uploads/courseImage/java.png'
              //  path:'uploads/chapterFile/9.applet.pdf'
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
    const [courseState, setCourseState] = useState({});
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
          setValue(newValue);
        };

    return (
               <div id="layoutSidenav_content">
        <main>

        
          <div id="crsBox" >
                  <div className="crs-header">
                {
                          imageState?(<img  id="image" src={URL.createObjectURL(imageState)} height="50" width="50"/>):''

                }  
                      <h1>{ courseState.title }</h1>
                      <p>
                    <label>Topic : </label>{  courseState.topic }    
                    <label style={{marginLeft:'50px'}}>Language : </label> { courseState.language } 
               </p>
                   </div>





                <div className="crs-row">
                <div className={classes.root}>
                <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >



{ courseState.chapters?(
                  courseState.chapters.map((item,index)=>{
                                                        return(
                                                          <div>
                                                           <Tab label={item.chapterTitle}  value={item.chapterTitle}/>
                                                           <Tab label="Activity" value={index} />
                                                           </div>
                                                        )
                                                        })
                                                                        
                                       ):''                 
                }
         
      
        </Tabs>
      </AppBar>
      </div>



              




                  {/* <div className="crs-leftcolumn">
                    <div className="crs-card">
                      <h2>TITLE HEADING</h2>
                      <h5>Title description, Dec 7, 2017</h5>
                    
                    </div>
                  
                  </div>
                  
                  <div className="crs-rightcolumn">
                    <div className="crs-card">
                      <h2>About Me</h2>
                      <p>Some text about me in culpa qui officia deserunt mollit anim..          </p>
                    </div> */}
                  
                  
                  </div>
                </div>

                    {/* <h2 classNameName="fs-title">Course Info</h2>
                    
               <label>Title : </label><p> { courseState.title }</p> 
    
                 

                    {/* <iframe id="viewer"  src={URL.createObjectURL(imageState)}/> */}


</main>
</div>

    )


}


export default ViewCourse

