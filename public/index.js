var socket = io();

socket.on('connect', () => {
    console.log('connected to server');


}) 

socket.on('disconnect', () => {
    console.log('Disconnected from  server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});

socket.emit('createMessage', {
    from:'Frank',
    text:'Hi'
}, function (){
    console.log('Got it');
    
});


jQuery('#message-form').on('submit', function(e){
 e.preventDefault();

 socket.emit('createMessage',{
     from: 'User',
     text:jQuery('[name=message').val()
 }, function () {
     
 })
})
