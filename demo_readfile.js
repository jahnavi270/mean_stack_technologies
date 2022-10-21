var fs=require('fs');
var http=require('http');
http.createServer(function(req,res){
fs.readFile('demofile1.html',function(err,data){
res.writeHead(200,{'Content-type:'text/html'});
res.write(data);
return res.end();
});
}).listen(8080);