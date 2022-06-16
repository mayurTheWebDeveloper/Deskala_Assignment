import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/candidateDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB connected");
})
//Schema for Registration and Login
const userSchema = new mongoose.Schema({
  phone: Number,
  email: String,
  password: String
});
const User = new mongoose.model("User", userSchema);
//Routes

app.post("/login", function(req, res) {
  const {
    email,
    password
  } = req.body;

  User.findOne({
    email: email
  }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({
          message: "Login Success",
          user: user
        });
      } else {
        res.send({
          message: "Password didnt match"
        })
      }
    } else {
      res.send({
        message: "User not registered"
      })
    }
  })
});

app.post("/register", function(req, res) {
  let {
    email,
    phone,
    password
  } = req.body;

  User.findOne({
    email: email
  }, (err, user) => {
    if (user) {
      res.send({
        message: "User already Registered"
      });
    } else {

      const user = new User({
        phone,
        email,
        password
      });
    
      user.save(err => {
        if (err) {
          res.send(err);
        } else {
          res.send({
            message: "Successfully Registered"
          })
        }
      })
    }
  })
});

//Schema for Candidate Details
const candidateSchema = new mongoose.Schema({
  name: String,
  address: String,
  state: String,
  pincode: Number,
  dob: Date,
  age: Number
});
const Candidate = new mongoose.model("Candidate", candidateSchema);

//Get Routes
app.get('/', function(req, res) {
  Candidate.find({}, function(err, foundItems) {
    if (err) {
      alert("Error");
    } else {
      res.send(foundItems)
    }
  })
})




app.get('/edit/:id', function(req, res) {

  //console.log(id);
  Candidate.findById({_id:req.params.id}, function(err, foundItems) {
    if (err) {
      alert("Error");
    } else {
      res.send(foundItems)
    }
  })
})

//POST Routes
app.post("/create", function(req, res) {

  const data = {
    name: req.body.name,
    address: req.body.address,
    state: req.body.state,
    age: req.body.age,
    dob: req.body.dob,
    pincode: req.body.pincode
  };
  console.log(req.body.dob);
  Candidate.create(data, function(err) {
    if (err) {
      alert("Error");
    } else {
      res.send({
        message: "Candidate Registered"
      });
    }
  });
});


//Delete Routes
app.post("/delete", (req, res) => {
  const {
    id
  } = req.body;
  //console.log(id);
  Candidate.deleteOne({
    _id: id
  }, () => {
    Candidate.find({}, function(err, foundItems) {
      if (err) {
        alert("Error");
      } else {
        res.send(foundItems)
      }
    })
  })
});

//update
app.post("/edit",function(req, res){
Candidate.findOneAndUpdate({_id: req.body}, function(err){
    if (err) {
      alert("Error");
    } else {
      res.send({  message: "Candidate Registered"});
    }
  })
})


app.listen(5000, function() {
  console.log("Server started at 5000");
})
