const http = require('http');                    //http is an inbuilt module in node
const server = http.createServer((req,res) => {   //req , res are request object and response object
    res.write("server is running");
    res.end();  //have to end the connection otherwise client will wait for endtime
})

server.listen(3000, () => {
    console.log("server is running");
});