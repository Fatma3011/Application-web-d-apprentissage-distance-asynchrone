const express= require('express')
const app =express()
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/route')
const cors=require('cors')
const session=require('express-session')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("database connected"))
app.use(express.json())
app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
      saveUninitialized:true,
      resave:false,
      cookie:{httpOnly:true,
        maxeAge:parseInt(process.env.SESSION_MAX_AGE)
    }
}))
app.use('/app',routesUrls)
app.listen(4000,()=>console.log("server is running"))
