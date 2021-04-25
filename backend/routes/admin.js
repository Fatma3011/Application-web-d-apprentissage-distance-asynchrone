const router =require('express').Router();
let teacher=require('../models/Teacher');
let admin=require('../models/Admin');

//pour lister les enseignants

router.route('/teacherlist').get((req,res)=>{

    teacher.find()
    .then(teachers=>res.json(teachers))
    .catch(err => res.status(400).json('Error: '+err));

});
 //pour chercher un enseignant
router.route('/teacherlist/:id').get((req,res)=>{

    teacher.findById(req.params.id)

    .then(teachers=>res.json(teachers))
    .catch(err => res.status(400).json('Error: '+err));
});
// pour supprimer un enseignant
router.route('/teacherlist/:id').delete((req,res)=>{
    teacher.findByIdAndDelete(req.params.id)

    .then(()=> res.json('teacher deleted'))
    .catch(err => res.status(400).json('Error: '+err));

});
//pour ajouter un enseignant
router.route('/addteacher').post((req,res)=>{
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const specialization = req.body.specialization;
    const email = req.body.email;
    const password = req.body.password;
    const phonenumber = Number(req.body.phonenumber) ;
    const salary = Number(req.body.salary);
    
    const newTeacher=new teacher({
        firstname,lastname,specialization,email,password,phonenumber,salary});
    
    newTeacher.save()
        .then(()=> res.json('teacher Added'))
        .catch(err=>{
            // console.log(res.status(400).json('Error: ' + err));
            res.send(err);
            console.log(err)

    });
});
module.exports = router;