// Building HTTP server
const http = require("http"); // build in package
const fs = require("fs");


const myServer = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log("New Req Received");
  const log = `${Date.now()}: New Req Received \n`;
  // non blocking request

  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello From Server");
  });
});

myServer.listen(8000, () => console.log("Server Started!"));
