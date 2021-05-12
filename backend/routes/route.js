const express=require('express');
const router =express.Router();
const {signin,signup} =require('../controllers/userController.js')
const {getInfo,updateProfile,getMyCourses} =require('../controllers/studentController.js')
const {getAllCourses} =require('../controllers/courseController.js')

const {auth} =require('../middleware/auth')


const secret='test';
//auth 
router.post('/signup',signup)
router.post('/signin',signin)
//student
router.get('/student/myprofile/:id',auth,getInfo)
router.post('/student/myprofile/:id',auth,updateProfile)
router.get('/student/mycourses/:id',auth,getMyCourses)
//homepage
router.get('/home/courses',getAllCourses)


module.exports=router