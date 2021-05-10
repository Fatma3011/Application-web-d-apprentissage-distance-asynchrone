const SignUpTemplateCopy= require('../models/studentModel')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const secret = 'test';

 const signup = async(req,res)=>{
  try{
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    const signedUpUser=new SignUpTemplateCopy({
  userName: req.body.userName,
   email: req.body.email,
  password: hashedPassword
  });
 
  
  signedUpUser.save()
  .then (data=>{console.log(data);res.send(data);})
  .catch (error=>{console.log(error);res.send(error);})
}
  catch{res.status(500).json({message:'Somehting went wrong'})}
  };

const signin = async(req,res)=>{
    //email Validation
    SignUpTemplateCopy.findOne({email:req.body.email})
    .then(student=>{
      if (student)
      {
        //Password validation
        bcrypt.compare(req.body.password, student.password).then(valid=>{
          if(!valid){res.send({message:"incorrectpassword"})} else {
      //Create and assign a token 
      try{
      const token=jwt.sign({email:student.email, id:student._id},secret,{expiresIn:"5h"});
      res.status(200).json({message:"loggedin",result:student,token});}
      catch{res.status(500).json({message:'Somehting went wrong'})}
      }})
        }
    
      else   {res.send('notfound')}
    
    })
  .catch(error=>res.status(500).json({message:"femma probbb"}))
  };
  

    module.exports={signup,signin};


