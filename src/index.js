var http = require("http");
const httpServer = http.createServer(handleServer);
const result={  
        phone: '18602100000', 
         email: 'guestcaredominos@jublfood.com' 
   };
   



function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.writeHead(200,{'content-type':"text/plain"});
        res.end('welcome to dominos')

    }
    if(req.url==="/contact"){
        res.writeHead(200,{'content-type':"application/json"});
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(404,{'content-type':"text/plain"});
        res.end('404 NOT FOUND')
    }
   
  
};
httpServer.listen(8080,()=>console.log('port is running'))



module.exports = httpServer;