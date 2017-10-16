var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(4000, function () {
    console.log("listening to request on port 4000");
});

// Static files
app.use(express.static("public"));

var io = socket(server);


io.on("connection", function name(socket) {
    console.log("connection established!", socket.id);

    // handle chat event
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });

    // handle typing event
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });

});