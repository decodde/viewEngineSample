const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const port = 5000;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'pug'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder




//the :id denotes the qery parameter value */
app.get("/user/:id", async (req,res) => {
    //so to read the value passed by the user in the :id variable
    var {id} = req.params;
    console.log(id);
    res.render("user",{id:id});
})

app.get("/user/:id/:name/:age", async (req,res) => {
    //so to read the value passed by the user in the :id variable
    var {id,name,age} = req.params;
    console.log(id);
    res.render("user",{id:id,name:name,age:age});
})

app.get("/*",async (req,res ) =>{
    res.json({type:"success", msg :"Hi, this is just a test server"})
})

app.listen(port , async () => {
    console.log("viewEngine Sample running")
})