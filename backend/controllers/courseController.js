const courseSchema =require('../models/CourseModel')
const getAllCourses = async(req, res)=>{
    console.log("debut")
    
     courseSchema.find()
   .then(records=>{
                   console.log(records);
   
                   res.status(200).json(records);
               })
     .catch (error=>
        res.send(error)
     )
}
module.exports={getAllCourses}