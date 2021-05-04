const express = require ('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
var bodyparser = require('body-parser');
const router = require('./routes/router')
const cors=require('cors')

const app =express()

dotenv.config() //hide (secure) the password and the info about the table 

mongoose.connect(process.env.DATABASE_ACCESS,()=>{console.log("database connected")})

app.use(express.json()) //activate body-parser
app.use(cors()) // activate middleware

app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
 

app.use('',router)
app.listen(5000,()=>console.log("server is up running"))
