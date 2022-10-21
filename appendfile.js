var fs=require("fs");
var data="HELLO WORLD";
fs.appendFile('input.txt',data,function(err){
if(err){
return console.error(err);
}
else{
console.log("Appended Successfully");
console.log(data.toString());
}
fs.readFile('input.txt',function(err,data){
if(err)
console.log("Can't open");
else
console.log(data.toString());
});
});