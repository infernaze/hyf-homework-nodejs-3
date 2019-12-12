const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res, next) {
  res.send("Hello World!");
});

let users = [];

app.get("/users", function(req, res, next){
  res.send(users);
});

app.post("/user", function(req, res, next){
  var newId = users.length;
  users.push({id:newId})
  res.send({id:newId});
});

app.get("/user/:id", function(req, res, next){
  res.send(users[0]);
});


app.listen(port, function() {
	console.log("Server started on port: " + port);
});

