var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send("Welcom man!")
});
app.get('/bye',function(req,res){
    res.send("Bye Bye")
});
app.get('/gg',function(req,res){
    res.send("gg")
});
app.get('/course/:courseName',function(req,res){
    var fullNames = {
        css227 : "Web pro",
        css222 : "OOP",
        css225 : "Database",
        css226 : "OS",
        cssxxx : "ALL"
    }
    var name = req.params.course.courseName.toUpperCase();
    var fullname = fullNames[name];
    res.send("The full name of "+ name.toUpperCase()+" is "+ fullname+ ".");
});
app.get("/course/:courseName",function(req,res){
    var coursename = req.params.courseName;
    res.send("Welcome to course "+coursename.toUpperCase()+".");
});
app.get('/course/:courseName/list/:stdName',function(req,res){
    console.log(req.params);
    var coursename = req.params.courseName;
    var student = req.params.stdName;
    res.send(student + "is in class "+coursename+'.');
});


app.get('/repeat/:Word/:Time',function(req,res){
    var word = req.params.Word;
    var time = Number(req.params.Time);
    var result = "";
    for(var i = 0;i<time;i++){
        result += word + " ";
    }
    res.send(result);
});

app.get('*',function(req,res){
    res.send("Please beware your route.")
});
app.listen(3000,function(){
    console.log("Server is sunning");
});