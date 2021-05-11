const mongoose=require('mongoose')
const teacherSchema = new mongoose.Schema({
    firstName:{
        type:String,
       
    },
    lastName:{
        type:String,
      
    },
    specialization:{
        type:String,
       
    },
    phone:{
        type:String,
           
    },
    email:{
        type:String,
      
    },
    password:{
        type:String,
        required:true
    },
   
    updateDate:{
        type:Date,
        default:Date.now
    },


}
,
{
    timestamps: true
  })
module.exports = mongoose.model('teacher',teacherSchema)