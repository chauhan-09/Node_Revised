const http = require('http');                    //http is an inbuilt module in node
const server = http.createServer((req,res) => {   //req , res are request object and response object
    res.write("server is running");
    res.end();  //have to end the connection otherwise client will wait for endtime
})

server.listen(3000, () => {
    console.log("server is running");
});



/*


req --> Incoming request of the client.

It contains details like URL requested , http method etc.


res --> response that the server will send back to client.

It can be some data , statuscode , end the response etc.



*/