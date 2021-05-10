const express=require('express');
const router =express.Router();
const {signin,signup} =require('../controllers/user.js')
const {getInfo,updateProfile} =require('../controllers/student.js')
const {auth} =require('../middleware/auth')


const secret='test';

router.post('/signup',signup)

router.post('/signin',signin)
router.get('/student/myprofile/:id',auth,getInfo)
router.post('/student/myprofile/:id',auth,updateProfile)

module.exports=router