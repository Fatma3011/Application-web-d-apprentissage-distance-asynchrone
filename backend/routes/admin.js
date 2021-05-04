const router =require('express').Router();
let teacher=require('../models/Teacher');
let course=require('../models/Course');
let student=require('../models/Student');
let user=require('../models/User');
const jwt = require('jsonwebtoken');

//sera executer pour toute les paths de l'admin ('/admin/****' )
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
     jwt.verify(token, 'RANDOM_TOKEN_SECRET' ,(err, decodedToken) => {
            if(err) return res.status(401)
            user.findById(decodedToken.userId)
                                            .then ((user)=>{if (user){
                                                console.log(user)
                                                next()
                                            }
                                                })               
                                            .catch ((user) => {if (!user){res.status(400)}} )
                
            })
            next();
        });
  
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

//pour lister les cours

router.route('/courselist').get((req,res)=>{
    course.find()
    .then(courses=>res.json(courses))
    .catch(err => res.status(400).json('Error: '+err));
});

// pour supprimer un cours

router.route('/courselist/:id').delete((req,res)=>{
    course.findByIdAndDelete(req.params.id)

    .then(()=> res.json('course deleted'))
    .catch(err => res.status(400).json('Error: '+err));

});

 //pour chercher un cours

 router.route('/courselist/:id').get((req,res)=>{
    course.findById(req.params.id)
    .then(courses=>res.json(courses))
    .catch(err => res.status(400).json('Error: '+err));
});

//pour lister les etudiants

router.route('/studentlist').get((req,res)=>{
    student.find()
    .then(students=>res.json(students))
    .catch(err => res.status(400).json('Error: '+err));
});

 //pour chercher un etudiant

 router.route('/studentlist/:id').get((req,res)=>{
    student.findById(req.params.id)
    .then(students=>res.json(students))
    .catch(err => res.status(400).json('Error: '+err));
});

 //pour supprimer un etudiant

router.route('/studentlist/:id').delete((req,res)=>{
    student.findByIdAndDelete(req.params.id)

    .then(()=> res.json('student deleted'))
    .catch(err => res.status(400).json('Error: '+err));

});
module.exports = router;