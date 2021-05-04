const path = require('path');
const multer = require("multer")

const PATH="./uploads";


let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,PATH);
    },
    filename: function(req, file, cb){
       cb(null,Date.now()+'-'+path.extname(file.originalname));
    }
 });

 let upload = multer({
    storage: storage,
 })

 module.exports=upload