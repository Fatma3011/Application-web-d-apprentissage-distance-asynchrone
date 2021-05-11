// import React ,{useEffect, useState} from 'react'
// import { getCourse ,getImage} from "../../services/teacher.service";
// import {  useParams} from "react-router-dom";

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function SeeCourse() {

//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//     // let {idC}= useParams()
//     // const [imageState, setImageState] = useState("");
//     // const [courseState, setCourseState] = useState({});

//     // const getCrs=()=>{
//     //     if(idC !== undefined){  
          
//     //       getImage({
//     //         path:'uploads/courseImage/java.png'
//     //       //  path:'uploads/chapterFile/9.applet.pdf'

//     //      })
//     //       .then((response) => {
//     //         console.log(response.data);
          
//     //         setImageState(response.data)

          
//     //       })
//     //       .catch((error) => {
//     //         console.log(error);
//     //       });


//           // getCourse(idC)
//           // .then((response) => {
//           //    setCourseState({
//           //     title: response.response.title,
//           //     topic: response.response.topic,
//           //     language: response.response.language,
//           //     estimatedTime: response.response.estimatedTime,
//           //     image:response.response.image,
//           //     chapters:response.response.chapters,
//           //   });
//           //   console.log(courseState);
//           // })
//           // .catch((error) => {
//           //   console.log(error);
//           // });

   
//           // useEffect(() => {
              
//           //  getCrs();

      
//           //   }, []);
          

//     return (
//                <div id="layoutSidenav_content">
//         <main>

        
//           <div id="crsBox" >
//                   <div className="crs-header">
//                       <h1>My Website</h1>
//                       <p>Resize the browser window to see the effect.</p>
//                    </div>

//                 <div className="crs-row">

//                 <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Five" {...a11yProps(4)} />
//           <Tab label="Item Six" {...a11yProps(5)} />
//           <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>





















//                   {/* <div className="crs-leftcolumn">
//                     <div className="crs-card">
//                       <h2>TITLE HEADING</h2>
//                       <h5>Title description, Dec 7, 2017</h5>
                    
//                     </div>
                  
//                   </div>
                  
//                   <div className="crs-rightcolumn">
//                     <div className="crs-card">
//                       <h2>About Me</h2>
//                       <p>Some text about me in culpa qui officia deserunt mollit anim..          </p>
//                     </div> */}
                  
                  
//                   </div>
//                 </div>

//                     {/* <h2 classNameName="fs-title">Course Info</h2>
                    
//                <label>Title : </label><p> { courseState.title }</p> 
    
                 
//                <label>Topic : </label><p>{  courseState.topic } </p> 

                    
//                <label>Language : </label> <p>{ courseState.language } </p>  */}

//                    {/* <img  id="image" src={URL.createObjectURL(imageState)} height="50" width="50"/> */}
//                     {/* <iframe id="viewer"  src={URL.createObjectURL(imageState)}/> */}


// </main>
// </div>

//     )
// }

// export default SeeCourse





