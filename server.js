var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// Servimos los archivos necesarios
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/socket.io-cliente/dist'));
app.use('/js', express.static(__dirname + '/node_modules/phaser/dist'));

// Ruta principal
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Si se accede a otra ruta diferente al home, se redirigirá
app.get('*', function (req, res) {
    res.redirect('/');
});

console.log("Servidor iniciado...");

http.listen(port, () => {
    console.log("Escuchando en " + port);
});