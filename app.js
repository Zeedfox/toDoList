//jshint esversion:6
//requering the libraries
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date.getDay());

//inicializating the web application
const app = express();

//setting EJS to our web apllication
app.set('view engine', 'ejs');

//inicialization of bodyParser
app.use(bodyParser.urlencoded({extended: true}));
//define the public resource location of our static files
app.use(express.static("public"));
var items = ["study the web course","play a bit warframe","take your lunch time"];
let workItems = [];

app.get("/", function(req, res) {
  // res.send("Hello");
  //variables
  // const currentDay = today.getDay();

  // if(today.getDay() === 6 || today.getDay() === 0){
  //   day = "Weekend";
  // }else{
  //   // res.write("<p>It is not the weekend</p>");
  //   // res.write("<h1>Boo! I have to work!</h1>");
  //   // res.send();
  //   // res.sendFile(__dirname + "/index.html");
  //   day = "Weekday";
  // }

  //passing the data to the variable of the HTML template(list.ejs)
  let day = date.getDate();
  res.render('list', {
    listTitle: day,
    newItem: items
  });
});


app.post("/", function(req, res){

  var newToDo = req.body.activity;
  console.log(req.body);

  if(req.body.list === "Work"){
    workItems.push(newToDo);
    res.redirect("/work");
  }
  else{
    items.push(newToDo);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newItem: workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about", {});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
