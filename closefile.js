var fs=require('fs');
fs.close(fd,function(err){
if(err)
console.log("NOT CLOSED");
else
console.log("CLOSED SUCCESSFULLY");
});