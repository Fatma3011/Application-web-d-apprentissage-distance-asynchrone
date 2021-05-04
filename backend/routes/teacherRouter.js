var router = require('express').Router()
const {viewProfile,updateProfile}= require('../controllers/teacherController')
const { addCourse , getAllCourseOfTeacher,deleteCourse ,getCourse,editCourse}= require('../controllers/courseController')


router.route("/viewProfile/:id").get(viewProfile)
router.route("/updateProfile").post(updateProfile)
router.route("/courseList/:id").get(getAllCourseOfTeacher)
router.route("/addCourse").post(addCourse)
router.route("/deleteCourse/:id").get(deleteCourse)
router.route("/getCourse/:id").get(getCourse)
router.route("/editCourse/").post(editCourse)




module.exports = router;