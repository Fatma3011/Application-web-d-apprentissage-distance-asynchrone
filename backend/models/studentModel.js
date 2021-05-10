const mongoose=require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt =require('bcryptjs');
const { string } = require('yup/lib/locale');
const signUpTemplate=new mongoose.Schema({

userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:[true,'Empty password is not allowed ']

},
date: {
    type:Date,
    default:Date.now
},

coursesTaken:[{
        Name:String, 
         Image:String,
        id:String,
       chapter:String,
        score:String,
        
}],

   
 
 coursesFinished: [{
    Name:String, 
    Image:String,
    id:String,
    score:String,
    certif:String,
    
}],

coursesNotFinished: [{
    Name:String, 
    Image:String,
    id:String,
    score:String,
    chapter:String,
    
}],

classement:
{type:String},

})


/**
 * Validates unique email
 */
 signUpTemplate.path('email').validate(async(email)=>{const emailCount= await mongoose.models.studentTable.countDocuments({email})
 return !emailCount},'Email already exists')



module.exports=mongoose.model('studentTable',signUpTemplate)