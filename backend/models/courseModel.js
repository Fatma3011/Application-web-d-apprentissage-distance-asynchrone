const mongoose=require('mongoose')
const courseSchema = new mongoose.Schema({
    title:String,
    topic:String,
      
    language:String,
    description:String,
    estimatedTime:String,
    image:String,
     chapters:[{
            chapterTitle:String,
            chapterTime: String,
            chapterFile:String,
            points:String,
            quiz:          [{
                                questionText:String,
                                options : [{
                                                optionText: String ,
                                                value:String
                                }], 
                                open: {type:Boolean},
                                points:String,
                                answerKey:String
             }]  
    }],
    creationDate:{
    type:Date,
    default:Date.now
    },
    createdBy:{
      type:String
      // type:mongoose.Schema.Types.ObjectId,ref:'teacher'
    }

})


module.exports = mongoose.model('Course',courseSchema)