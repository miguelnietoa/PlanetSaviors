var connections = [];

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// Servimos los archivos necesarios
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/socket.io-client/dist'));
app.use('/js', express.static(__dirname + '/node_modules/phaser/dist'));

console.log("Servidor iniciado...");

// Ruta principal
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Si se accede a otra ruta diferente al home, se redirigirá
app.get('*', function (req, res) {
    res.redirect('/');
});

function getCounter() {
    io.sockets.emit('getCounter', connections.length);
}

io.on('connection', function (socket) {
    connections.push(socket); // Se añade socket-jugador a connections
    console.log('a user connected ' + connections.length + '  ' + socket.id);
    //getCounter();
    if (connections.length == 1) {
        //io.emit('getCounter', connections.length);
    }

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });


});

http.listen(port, () => {
    console.log("Escuchando en " + port);
});