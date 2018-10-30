var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000;

// app.use('/css', express.static(__dirname + '/css'));
// app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

app.get('/api', (req,res) => {
    console.log('website has been opened');
    res.send({ express: 'Hello From Express' });
});

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});