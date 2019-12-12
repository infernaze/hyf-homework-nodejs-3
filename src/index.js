const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res, next) {
  res.send("Hello World!");
});


app.listen(port, function() {
	console.log("Server started on port: " + port);
});

