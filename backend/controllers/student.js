const SignUpTemplateCopy= require('../models/studentModel')
const bcrypt=require('bcryptjs')


const getInfo = async(req,res)=>{
    //email Validation
    console.log(req.params.id)
    SignUpTemplateCopy.findOne({_id:req.params.id})
    .then(student=>{
      res.send(student);
    })
  .catch(error=>res.status(401).json({error}))
};

const updateProfile= async (req, res)=> {
  let id=req.params.id
  let student =req.body
  console.log(student.userName)
  let updatedData={}
  let message="";
   if (req.body.password===""&& req.body.username!=="")
   {         updatedData={  userName:student.userName};
   message="you have successfully updated your username";
  }
 else if(req.body.password!==""&& req.body.username==="") {

   const saltPassword=  await bcrypt.genSalt()     
   const securePassword=await bcrypt.hash(student.password,saltPassword)
   updatedData={ password:securePassword}
   message="you have successfully updated your password";

 }
 else if(req.body.password!==""&& req.body.username!=="") {

  const saltPassword=  await bcrypt.genSalt()     
  const securePassword=await bcrypt.hash(student.password,saltPassword)
  updatedData={ password:securePassword,userName:req.body.userName}
  message="you have successfully updated your profile ";

}    



         SignUpTemplateCopy.findByIdAndUpdate(id,{$set:updatedData})
         .then(()=>{
             res.json({
                message:"message",
             });
             console.log('22')
         })
    
         .catch(error=>{
             res.json({
                 message:'an error occured'
             })
         })
    
        };
  
const getCoursesTaken = async(req,res)=>{
  SignUpTemplateCopy.findOne({_id :req.params.id})
  .then(student=>{res.send(student.coursesTaken);})
.catch(error=>res.status(401).json({}))
};

const getCoursesNotFinished = async(req,res)=>{
  SignUpTemplateCopy.findOne({_id :req.params.id})
  .then(student=>{res.send(student.coursesNotFinished);})
.catch(error=>res.status(401).json({}))
};

const getCoursesFinished = async(req,res)=>{
  SignUpTemplateCopy.findOne({_id :req.params.id})
  .then(student=>{res.send(student.coursesFinished);})
.catch(error=>res.status(401).json({}))
};

module.exports={getInfo,getCoursesTaken,getCoursesNotFinished,getCoursesFinished,updateProfile};