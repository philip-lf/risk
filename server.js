var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var PORT = 8181;

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req,res) => {
    console.log('file::: ', __dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(PORT, function() {
    console.log('Listening on '+ server.address().port);
});