const express=require('express');
const router =express.Router();
const {signin,signup} =require('../controllers/userController.js')
const {getInfo,updateProfile,getMyCourses,getCourse,getNomchapter,ModifyCourseStudent} =require('../controllers/studentController.js')
const {getAllCourses,getFile} =require('../controllers/courseController.js')

const {auth} =require('../middleware/auth')


const secret='test';
//auth 
router.post('/signup',signup)
router.post('/signin',signin)
//student
router.get('/student/myprofile/:id',auth,getInfo)
router.post('/student/myprofile/:id',auth,updateProfile)
router.get('/student/mycourses/:id',auth,getMyCourses)
router.get('/student/course/:idStudent/:idCourse',getNomchapter)
router.get('/student/course/:idCourse',getCourse)
router.post('/ModifyCourseStudent/:idStudent',auth,ModifyCourseStudent)

//homepage
router.get('/home/courses',getAllCourses)
router.post('/home/getfile',getFile)
module.exports=router