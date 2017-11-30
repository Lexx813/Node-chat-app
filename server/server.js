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



socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
        from: message.from,
        text:message.text,
        createdAt:new Date().getTime()
    })
})

socket.on('disconnect', () => {
    console.log('client disconnected');
});
})

server.listen(port, (req, res) => {
    console.log(`Server started on port:${port}`);
})