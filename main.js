var app = require('http').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')
;

app.listen(3000, function(){
   console.log('Serving...'); 
});

io.on('connection', function(socket){
  
  socket.emit('dados', socket.toString());
  
    var counts = 0;
    setInterval(function(){
       socket.emit('evento', 'evento ' + counts);
       counts ++;
    }, 5000);
  
  socket.broadcast.emit('visits', 'broadcast');

  socket.on('disconnect', function(){
    console.log('socket faleceu');
    socket.broadcast.emit('message', 0);
  });
  
  socket.on('start', function(){
      console.log('funcionou!')      
  });
});