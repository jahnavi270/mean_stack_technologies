var fs=require('fs');
var data=" This is the text i want to write";
fs.writeFile('input1.txt',data,function(err,data){
	if(err)
console.log("Can't write");
else{
console.log("Written successfully");
console.log("The written data is"+data.toString());
}
});
