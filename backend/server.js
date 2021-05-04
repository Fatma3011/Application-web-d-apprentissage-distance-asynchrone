require('dotenv').config()
var express=require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
const mongoose = require('mongoose');
const adminRouter=require('./routes/admin.js')
let user=require('./models/User');
const jwt = require('jsonwebtoken'); 

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
app.use(express.json())

app.use(cors());
app.use(express.json());
app.use(cors({ exposedHeaders: 'auth-token' }))
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

app.use('/admin',adminRouter);
app.post('/form', (req, res, next)=>{
    user.findOne({ email: req.body.email })
          .then(user => {
            if (!user) {
                console.log('Utilisateur non trouvé !')
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            

            if (!(req.body.password==user.password)) {
                console.log('Mot de passe incorrect !')
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            
                const userToken ={
                    token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: 10 }
                  )} 
                res
                  .header({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userToken })
                  .status(200)
                  .json(userToken);
          })
          .catch(error => {
            res.status(500).json({ error })}); })
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
