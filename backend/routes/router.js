var router = require('express').Router()

const teacherRouter = require('./teacherRouter')
// const adminRouter = require('./adminRouter')


router.use('/teacher', teacherRouter)
//router.use('/admin', adminRouter)




module.exports = router;