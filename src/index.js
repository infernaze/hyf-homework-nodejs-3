const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res, next) {
    res.send("Hello World!");
});

let users = [];

app.get("/users", function(req, res, next) {
    res.send(users);
});

app.post("/user", function(req, res, next) {
    var newId = users.length;
    users.push({ id: newId })
    res.send({ id: newId });
});

app.get("/user/:id", function(req, res, next) {
    res.send(findUser(req.params.id));
});

app.delete("/user/:id", function(req, res, next) {
    let newUserList = [];
    let found = false
    let user = {}
    for (var i = users.length - 1; i >= 0; i--) {
        if (users[i].id != req.params.id) {
            newUserList.push(users[i]);
        }else{
            found = true;
            user = users[i];
        }
    }

    users = newUserList;

    if(found){
        res.status(202);
        res.send(user);
    }else{
        res.status(204);
        res.send([]);
    }

    // if (!users.length) {
    //     res.status(204);
    //     res.send([]);
    // } else {
    //     res.status(202);
    //     res.send(users[req.params.id]);
    //     delete users[req.params.id];
    // }
});

function findUser(id) {
    retval = {};
    for (var i = users.length - 1; i >= 0; i--) {
        if (users[i].id == id) {
            retval = users[i];
        }
    }
    return retval;
}


app.listen(port, function() {
    console.log("Server started on port: " + port);
});

