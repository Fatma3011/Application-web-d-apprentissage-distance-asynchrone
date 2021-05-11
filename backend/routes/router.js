var router = require('express').Router()

const teacherRouter = require('./teacherRouter')

// const adminRouter = require('./adminRouter')


router.use('/teacher', teacherRouter)




module.exports = router;