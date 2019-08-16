var express = require("express");
var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  res.status(200).send("asdfs world");
});

app.get("/asdf", function(req, res) {
  //res.status(200).send("1/index.html");
  res.status(200).sendFile("1/index.html", { root: __dirname });
});

app.listen(PORT, function() {
  console.log("Server is running on PORT:", PORT);
});

//---------------------------------
//CREATING A SERVER WITHOUT EXPRESS
// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
