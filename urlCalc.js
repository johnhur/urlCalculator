var express = require("express");

var app = express();
//searches view directory for ejs files. 
app.set("view engine", "ejs");

//calcultor operators..
app.get("/add/:num1/:num2", function(req, res){
	var sum = parseInt(req.params.num1) + parseInt(req.params.num2)
	res.render("math", {number:sum});
})
app.get("/subtract/:num1/:num2", function(req, res){
	var difference = parseInt(req.params.num1) - parseInt(req.params.num2)
	res.render("math", {number:difference});
})
app.get("/multiply/:num1/:num2", function(req, res){
	var result = parseInt(req.params.num1) * parseInt(req.params.num2)
	res.render("math", {number:result});
})
app.get("/divide/:num1/:num2", function(req, res){
	var quotient = parseInt(req.params.num1) / parseInt(req.params.num2)
	res.render("math", {number:quotient});
})

//sets server to be hosted at the localhost:3000.. 
app.listen(3000, function() {
	console.log("Server starting on port 3000");
})
