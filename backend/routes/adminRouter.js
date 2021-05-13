var router = require("express").Router();
const {
  getAllTeachers,
  getOneTeacher,
  addTeacher,
  getCourse,
  getAllCourses,
  deleteCourse,
  getAllStudents,
  getOneStudent,
  deleteStudent,
  deleteTeacher,
  updateProfile,
  getInfo,
  getOneCourse,
} = require("../controllers/adminController");
const { verifyToken } = require("../controllers/auth");

router.use(verifyToken);

router.route("/searchteacher/:ch").get(getOneTeacher);
router.route("/searchcourse/:ch").get(getOneCourse);
router.route("/teacherlist").get(getAllTeachers);
router.route("/teacherlist/:id").delete(deleteTeacher);

router.route("/addteacher").post(addTeacher);
router.route("/coursechapters/:coursename/:id").get(getCourse);
router.route("/courselist/:id").delete(deleteCourse);
router.route("/courselist").get(getAllCourses);
router.route("/searchstudent/:ch").get(getOneStudent);
router.route("/studentlist/:id").delete(deleteStudent);
router.route("/studentlist").get(getAllStudents);
router.route("/editprofile/:id/:ch").post(updateProfile);
router.route("/profile").get(getInfo);

module.exports = router;