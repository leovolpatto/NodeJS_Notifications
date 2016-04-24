var express = require('express');
var app = new express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var api = require('./api/api');
var notificacoes = require('./api/notificacoes');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', notificacoes);

server.listen(3000, function () {
  console.log('listening on port 3000!');
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