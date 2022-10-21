var fs=require('fs');
fs.unlink('input1.txt',function(err){
if(err)
console.log("Can't delete");
else
console.log("Deleted Successfully");
});