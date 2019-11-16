var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var items = {};
var players = {};
var cont = 0;
var readyPlayers = [];
var startGame = false;

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

io.on('connection', function (socket) {
    console.log('a user connected');
    players[socket.id] = {
        puntaje: 0
    }
    socket.on('ready', () => {
        console.log("raeadyyyyy");
        if (!readyPlayers.includes(socket)) {
            readyPlayers.push(socket);
        }

        console.log('ready: ' + readyPlayers.length);
        console.log('players: ' + Object.keys(players).length);
        if (readyPlayers.length === Object.keys(players).length && !startGame) {
            generarItems();
            io.sockets.emit('startGame');
            io.sockets.emit('currentItems', items);
            startGame = true;
        }

    });

    socket.on('dragstart', (data) => {
        console.log("emitiendo dragstart");

        socket.broadcast.emit('dragstartServer', data);

    });

    socket.on('drag', (data) => {
        console.log("emitiendo drag");
        socket.broadcast.emit('dragServer', data);

    });

    socket.on('dragend', (data, collideBin) => {
        console.log('colisiona: ', collideBin);
        socket.broadcast.emit('dragendServer', data, collideBin);
        /*if (collideBin) {
            // Se elimina de los items en server
            //borrarItem(data.id);

            let i = Object.keys(items).length;
            while (i >= Object.keys(items).length) {
                generarItem(i);
            }
            io.sockets.emit('currentItems', items[i+1]);
        }*/

    }

    );

    // send the players object to the new player

    // update all other players of the new player
    //socket.broadcast.emit('newPlayer', players[socket.id]);

    // when a player disconnects, remove them from our players object
    socket.on('disconnect', function () {
        console.log('user disconnected');
        // remove this player from our players object
        delete players[socket.id];
        if (readyPlayers.includes(socket)) {
            readyPlayers.splice(readyPlayers.indexOf(socket), 1);
        }
        // emit a message to all players to remove this player
        // io.emit('disconnect', socket.id);
    });


});



http.listen(port, () => {
    console.log("Escuchando en " + port);
});

function colisionaArray(x, y, w, h) {
    for (let i in items) {
        if (colision(x, y, w, h, items[i].x - items[i].width / 2, items[i].y - items[i].height / 2, items[i].width, items[i].height)) {
            return true;
        }
    }

    return false;
}

function colision(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 < x2 + w2 && x1 + w1 > x2 &&
        y1 < y2 + h2 && h1 + y1 > y2) {
        return true;
    }
    return false;
}

function getItem(id) {
    for (let i in items) {
        console.log(items[i].id);
        if (items[i].id === id) {
            return items[i];
        }
    }
    return undefined;
}

function borrarItem(id) {
    for (let i in items) {
        console.log(items[i].id);
        if (items[i].id === id) {
            items.splice(items[i], 1);
        }
    }
}

function generarItems() {
    let i = Object.keys(items).length;
    while (Object.keys(items).length < 15) {
        generarItem(i);
        i++;
    }
}

function generarItem(i) {
    let random = Math.floor(Math.random() * (5 + 1));
    let img, num, w, h;
    switch (random) {
        case 0: // eWasteBin (5)
            num = 1 + Math.floor(Math.random() * 5);
            img = "eWaste" + num;
            switch (num) {
                case 1:
                    w = 47;
                    h = 50;
                    break;
                case 2:
                    w = 29;
                    h = 50;
                    break;
                case 3:
                    w = 70;
                    h = 49;
                    break;
                case 4:
                    w = 47;
                    h = 54;
                    break;
                case 5:
                    w = 65;
                    h = 40;
                    break;
            }
            break;
        case 1: // glassBin (4)
            num = (1 + Math.floor(Math.random() * 4));
            img = "glass" + num;
            switch (num) {
                case 1:
                    w = 30;
                    h = 49;
                    break;
                case 2:
                    w = 29;
                    h = 49;
                    break;
                case 3:
                    w = 17;
                    h = 55;
                    break;
                case 4:
                    w = 18;
                    h = 65;
                    break;
            }
            break;
        case 2: // metalBin (7)s
            num = (1 + Math.floor(Math.random() * 7));
            img = "metal" + num;
            switch (num) {
                case 1:
                    w = 39;
                    h = 36;
                    break;
                case 2:
                    w = 33;
                    h = 61;
                    break;
                case 3:
                    w = 34;
                    h = 40;
                    break;
                case 4:
                    w = 32;
                    h = 27;
                    break;
                case 5:
                    w = 33;
                    h = 43;
                    break;
                case 6:
                    w = 32;
                    h = 62;
                    break;
                case 7:
                    w = 24;
                    h = 69;
                    break;
            }
            break;
        case 3: // organicBin (8)
            num = (1 + Math.floor(Math.random() * 8));
            img = "organic" + num;
            switch (num) {
                case 1:
                    w = 21;
                    h = 59;
                    break;
                case 2:
                    w = 29;
                    h = 36;
                    break;
                case 3:
                    w = 21;
                    h = 61;
                    break;
                case 4:
                    w = 34;
                    h = 44;
                    break;
                case 5:
                    w = 65;
                    h = 47;
                    break;
                case 6:
                    w = 41;
                    h = 41;
                    break;
                case 7:
                    w = 35;
                    h = 51;
                    break;
                case 8:
                    w = 69;
                    h = 23;
                    break;
            }
            break;
        case 4: // paperBin (4)
            num = (1 + Math.floor(Math.random() * 4));
            img = "paper" + num;
            switch (num) {
                case 1:
                    w = 48;
                    h = 38;
                    break;
                case 2:
                    w = 41;
                    h = 38;
                    break;
                case 3:
                    w = 26;
                    h = 36;
                    break;
                case 4:
                    w = 59;
                    h = 41;
                    break;
            }
            break;
        case 5: // plasticBin (4)
            num = (1 + Math.floor(Math.random() * 4));
            img = "plastic" + num;
            switch (num) {
                case 1:
                    w = 36;
                    h = 46;
                    break;
                case 2:
                    w = 17;
                    h = 50;
                    break;
                case 3:
                    w = 32;
                    h = 41;
                    break;
                case 4:
                    w = 40;
                    h = 49;
                    break;
            }
            break;
    }
    let xx = 200 + Math.floor(Math.random() * (1100 - 200 + 1));
    if (!colisionaArray(xx - w / 2, 0 - h / 2, w, h)) {
        items[i] = {
            id: ++cont,
            x: xx,
            y: 0,
            width: w,
            height: h,
            velocityY: 30,
            image: img
        };
    }
}