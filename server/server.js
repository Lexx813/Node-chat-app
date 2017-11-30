const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
 
const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
console.log('New User connected');

socket.emit('newMessage', {
    from:'alex@ho.com',
    text:"Hey. whats going on",
    createdAt: 123
});

socket.on('createMessage', (Message) => {
    console.log('createMessage', Message);
})

socket.on('disconnect', () => {
    console.log('client disconnected');
});
})

server.listen(port, (req, res) => {
    console.log(`Server started on port:${port}`);
})