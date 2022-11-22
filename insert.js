 const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected-Error");
else
console.log("DB Connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns);
//const data=new nm({name:'SOHAIL',age:27,phno:1267898897});
//const data1=new nm({name:'PINKY',age:30,phno:3456774345});
//insert many records at a time
nm.insertMany([
{name:'BHAVS',age:21,phno:4567878981},
{name:'ANU',age:19,phno:1234566789},
{name:'VENU',age:22,phno:4576322245}
]).then(function(){
console.log("data inserted")
}).catch(function(error){
console.log(error)
});
// find only first record
nm.findOne({},function(err,data){
if(err)
console.log(err);
else
console.log("first function call:",data);
});

//data.save();
//data1.save();
