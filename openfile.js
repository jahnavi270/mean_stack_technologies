var fs=require('fs');
fs.open("input1.txt","r+",function(err,data){
if(err){
console.log("Can't open file");
//return console.error(err);
}
else{
console.log("Opened successfully");
}
});
