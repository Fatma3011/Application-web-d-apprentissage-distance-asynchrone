var express=require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const adminRouter=require('./routes/admin.js')

// connexion a la base
const url = "mongodb+srv://CG-Fatma:test@test.zarse.mongodb.net/elearning_website?retryWrites=true&w=majority";
const conx= mongoose.connect(url ,{ useUnifiedTopology: true , useNewUrlParser: true }, (err)=>{
    if (err) {
        console.log("connexion à la base de donnees est echouée")
    }
    else {
        console.log("connexion etablie AVEC SUCCES")
    }
})
// server

const app = express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  app.use(session({ 
      secret: 'keyboard cat', 
      resave: false,
      saveUninitialized: false,
    }))
app.use('/admin',adminRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
