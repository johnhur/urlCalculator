var express = require("express");

var app = express();
//searches view directory for ejs files. 
app.set("view engine", "ejs");

//calcultor operators..
// app.get("/add/:num1/:num2", function(req, res){
// 	var sum = Number(req.params.num1) + Number(req.params.num2)
// 	res.render("math", {number:sum});
// })
// app.get("/subtract/:num1/:num2", function(req, res){
// 	var difference = Number(req.params.num1) - Number(req.params.num2)
// 	res.render("math", {number:difference});
// })
// app.get("/multiply/:num1/:num2", function(req, res){
// 	var result = Number(req.params.num1) * Number(req.params.num2)
// 	res.render("math", {number:result});
// })
// app.get("/divide/:num1/:num2", function(req, res){
// 	var quotient = Number(req.params.num1) / Number(req.params.num2)
// 	res.render("math", {number:quotient});
// })z

//refactored into one path!!!! BOOOOM:

app.get("/:x/:num1/:num2", function(req, res){
	var sum = Number(req.params.num1) + Number(req.params.num2);
	var difference = Number(req.params.num1) - Number(req.params.num2);
	var result = Number(req.params.num1) * Number(req.params.num2);
	var quotient = Number(req.params.num1) / Number(req.params.num2);
	var x = req.params.x;

	if (x === "add") {
		res.render("math", {number:sum});
	}
	else if (x === "subtract") {
		res.render("math", {number:difference});
	}
	else if (x === "multiply") {
		res.render("math", {number:result});
	}
	else if (x === "divide") {
		res.render("math", {number:quotient});
	}



})

//sets server to be hosted at the localhost:3000.. 
app.listen(3000, function() {
	console.log("Server starting on port 3000");
})
