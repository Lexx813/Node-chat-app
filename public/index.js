var socket = io();

socket.on('connect', () => {
    console.log('connected to server');

    socket.emit('createMessage', {
        from:'angie',
        text:'hey this is alex'
    })
}) 

socket.on('disconnect', () => {
    console.log('Disconnected from  server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});
