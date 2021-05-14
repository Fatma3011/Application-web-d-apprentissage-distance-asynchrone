var router = require("express").Router();
const adminRouter = require("./adminRouter");
 const teacherRouter = require("./teacherRouter");
router.use("/admin", adminRouter);
router.use("/teacher", teacherRouter);

module.exports = router;
