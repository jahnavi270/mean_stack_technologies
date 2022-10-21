const http=require("http");
var lmodule=require("./largestnumber");
var server=http.createServer((req,res)=>{
result=lmodule.findBiggestNumber(220,100);
res.writeHead(200,{"Content-Type":"text/html"});
res.write("<html><body><h1>The biggest number of two numbers is:"+result+"</h1></body></html>");
res.end();
console.log("Request received");
});
server.listen(4040);
console.log("Running..");