
const express = require("express");

const bodyparser = require("body-parser"); // parses your request and convert in to required fomat

const mongodb = require("mongodb").MongoClient; // need to install after use -- npm install mongodb@2.2.33 --save

const app = express(); // Creates an Express application. 
                       // The express() function is a top-level function exported by the express module.

app.use(bodyparser.json());  // it parses json  // basically tells the system that you want json to be used.

app.use((req,res,next)=>{      // to call the middleware , It will call every time
    console.log("Middleware");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});


var db;
mongodb.connect("mongodb://nagablog:nagablog123@ds133275.mlab.com:33275/blogs",(error,database)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("DB Connected");
        db=database;
    }
});

app.get("/",(req,res)=>{
    console.log("welcome express page 1");
    //res.send(db);
    res.send("Welcome to Express");
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    req.body._id = new Date().getTime();
    db.collection("users").save(req.body, (err, data)=>{
        if(err)
        {
            res.status(401).send("Something went wrong");   // 401 Unauthorized Error
        }
        else {
            res.json("User Registered Sucessfully");
        }
    })
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("users").find(req.body, {useremail:1,userpwd:1}).toArray((error, data)=>{
        if(error){
            console.log(error);
            res.status(403).send("Error in query select");
        }else{
            console.log(data);
            res.json(data);
        }
    })
});

app.get("/getallusers",(req,res)=>{
    console.log("get all users");
    db.collection("users").find(req.body).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in select query");
        }else{
            res.json(data);
        }
    })
});

app.get("/userdetail/:id",(req,res)=>{
    console.log(req.params.id);
    db.collection("users").find( {_id : Number(req.params.id)} ).toArray((error,data)=>{
        if(error){
            res.status(403).json("Error in find query");
        }else{
            res.json(data);
        }
    })
});

app.get("/deleteuser/:id",(req,res)=>{
    //console.log("delete");
    var pa = { _id : Number(req.params.id)};
    //res.json(pa);
    db.collection("users").deleteOne(pa, (error, data)=>{
        res.redirect("/getallusers");
    })
    
});

app.post("/updateuser",(req,res)=>{
    console.log(req.body);
    
    var condition = { _id : req.body.userid};

    var values = { $set : { username : req.body.username, useremail : req.body.useremail, userpwd : req.body.userpwd }};

    db.collection("users").update(condition, values, (error, data)=>{
       res.json("Updated");
       //res.redirect("/userdetail/:"+req.body.userid);
    })
})


module.exports = app;