var router = require('express').Router()

const teacherRouter = require('./teacherRouter')

// const adminRouter = require('./adminRouter')


router.use('/teacher', teacherRouter)
router.route("/name").get(callName)

  
function callName(req, res) {
      
    
    var spawn = require("child_process").spawn;
  
    var process = spawn('python',["./hello.py",
                          // req.params.firstname,
                           // req.query.lastname
                        ] );
  
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )
}



module.exports = router;
