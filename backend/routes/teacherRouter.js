var router = require('express').Router()
const {viewProfile,updateProfile}= require('../controllers/teacherController')
const { uploadFile,deleteFile,getFile,addCourse, getAllCourseOfTeacher,deleteCourse ,getCourse,editCourse}= require('../controllers/courseController')
const upload=require('../middleware/upload')
const uploadImage=require('../middleware/uploadImage')



router.route("/viewProfile/:id").get(viewProfile)
router.route("/updateProfile").post(updateProfile)
router.route("/courseList/:id").get(getAllCourseOfTeacher)
router.route("/addCourse").post(uploadImage.single('image'),addCourse)
router.route("/deleteCourse/:id").get(deleteCourse)
router.route("/getCourse/:id").get(getCourse)
router.route("/editCourse/").post(editCourse)
router.route("/uploadFile/").post(upload.single('files'),uploadFile)
router.route("/deleteFile/").post(deleteFile)
router.route("/getFile/").post(getFile)













module.exports = router;