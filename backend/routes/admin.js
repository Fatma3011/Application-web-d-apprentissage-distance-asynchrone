const router =require('express').Router();
let teacher=require('../models/Teacher');


router.route('/teacherlist').get((req,res)=>{

    teacher.find()

    .then(teachers=>res.json(teachers))
    .catch(err => res.status(400).json('Error: '+err));

});
router.route('/teacherlist/:id').get((req,res)=>{

    teacher.findById(req.params.id)

    .then(teachers=>res.json(teachers))
    .catch(err => res.status(400).json('Error: '+err));

});
router.route('/teacherlist/:id').delete((req,res)=>{

    teacher.findByIdAndDelete(req.params.id)

    .then(()=> res.json('teacher deleted'))
    .catch(err => res.status(400).json('Error: '+err));

});
router.route('/addteacher').post((req,res)=>{
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phonenumber = Number(req.body.phonenumber) ;
    const salary = Number(req.body.salary);

    const newTeacher=new teacher({
        firstname,lastname,phonenumber,salary});
    
    newTeacher.save()
        .then(()=> res.json('User Added'))
        .catch(err=>res.status(400).json('Error: ' + err));

});
module.exports = router;