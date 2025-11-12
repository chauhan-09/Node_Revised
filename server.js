const http = require('http');                    //http is an inbuilt module in node
const server = http.createServer((req,res)=> {  //req , res are request object and response object
    res.write("server is running");
    res.end();
})

server.listen(3000, () => {
    console.log("server is running");
});