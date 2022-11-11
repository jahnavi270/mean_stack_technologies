const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected error");
else
console.log("DB connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns);
nm.insertMany([
{name:"Jhanu",age:20,phno:8919699160},
{name:"Geethika",age:45,phno:7891428529},
{name:"Deepthi",age:78,phno:9874561230}
]).then(function(){
console.log("Data inserted");
}).catch(function(error){
console.log(error)
});
nm.find({},function(err,data){
if(err)
console.log(err);
else
console.log("first function call:",data);
});