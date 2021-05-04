const courseSchema =require('../models/CourseModel')

const upload= require('../middleware/upload')


//create new course
const addCourse=(req,res)=>{  

    // var fields =[];
    // req.body.chapters.map((obj,index)=>{
    //     fields=[...fields,{ name: `chapterFile-${index}`, maxCount: 10 }]
    // })
    
    // var uploadMultiple = upload.fields(fields)
    // uploadMultiple (req, res, function (err) {
        // if(req.files){
        //     console.log(req.files)
        //     console.log("files uploaded")
        // }
        const course = new courseSchema({
            createdBy:req.body.createdBy,
            title:req.body.title,
            topic:req.body.topic,
            language:req.body.language,
            estimatedTime:req.body.estimatedTime,
            chapters:req.body.chapters
         })
         course.save()
            .then(data=>{
                res.json(data)
            })
            .catch(error=>{
                res.json(error)
            })
   // })
    
    
     
    }
     
    
      //get all courses of a teacher
       const getAllCourseOfTeacher= async(req, res)=>{
        try {
            var teacherId = req.params.id;
        
                   await courseSchema.find().where('createdBy').in(teacherId).exec((err, records) => {
                       console.log(records);
       
                       res.status(200).json(records);
                   });
        } catch (error) {
            res.send(error)
        }
    }


 //get single course
 const getCourse=(req,res)=>{
    let courseID=req.params.id
  courseSchema.findById(courseID)
  .then(response=>{
      res.json({
          response
      })
  })
  .catch(error =>{
      res.json({
          message:'An error occured'
      })
  })


}




      //delete course
    
      const deleteCourse=(req,res,next)=>{
        let courseID=req.params.id
        courseSchema.findByIdAndDelete(courseID)
        .then(()=>{
            res.json({
                message:'course deleted successfully'
            })
        })
        .catch(error=>{
            res.json({
                message:'an error occured'
            })
        })
    }

    //--------edit course----------

   const editCourse=(async(req,res)=>{
        let courseID=req.body._id
       let updatedData=req.body
        
       
        teacherSchema.findByIdAndUpdate(courseID,{$set:updatedData})
        .then(()=>{
            res.json({
                message:'course updated successfully'
            })
        })
        .catch(error=>{
            res.json({
                message:'an error occured'
            })
        })
    })
    


    module.exports = {
         addCourse , getAllCourseOfTeacher,deleteCourse ,getCourse ,editCourse
    
    }