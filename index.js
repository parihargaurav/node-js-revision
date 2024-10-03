// Building HTTP server
const http = require("http"); // build in package

const myServer = http.createServer((req, res) => {
  console.log("New Req Received");
  res.end("Hello From Server");
});

myServer.listen(8000, () => console.log("Server Started!"));
