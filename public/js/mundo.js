import itemJuego from './itemJuego.js';

var it;

var timer;
var cont = 0;
var items = [];
var txtPuntaje;
var glassBin, plasticBin, metalBin, paperBin, organicBin, eWasteBin;
var puntaje = 0;
var sw = false;
var musicFondo, musicPop, musicFail;



export default class Mundo extends Phaser.Scene {
    constructor() {

        super({ key: 'mundo' });
    }

    init() {
    }

    create() {
        // this.cameras.main.backgroundColor.setTo(255,255,255); // Color de fondo de la escena

        var self = this;
        this.socket = io();
        this.socket.on('currentPlayers', function (players) {
            Object.keys(players).forEach(function (id) {
                if (players[id].playerId === self.socket.id) {
                    //addPlayer(self, players[id]);
                    new itemJuego(self, 400, 300, 10, 'eWaste1');
                }
            });
        });
        this.socket.on('newPlayer', function (playerInfo) {
            addOtherPlayers(self, playerInfo);
        });
        this.socket.on('disconnect', function (playerId) {
            self.otherPlayers.getChildren().forEach(function (otherPlayer) {
                if (playerId === otherPlayer.playerId) {
                    otherPlayer.destroy();
                }
            });
        });

        this.add.image(-80, -20, 'background').setOrigin(0, 0);
        glassBin = this.add.image(80, 110, 'glassBin').setScale(0.8);
        plasticBin = this.add.image(80, 110 * 3, 'plasticBin').setScale(0.75);
        metalBin = this.add.image(80, 110 * 5, 'metalBin').setScale(0.75);
        paperBin = this.add.image(1220, 110, 'paperBin').setScale(0.8);
        organicBin = this.add.image(1220, 110 * 3, 'organicBin').setScale(0.75);
        eWasteBin = this.add.image(1220, 110 * 5, 'eWasteBin').setScale(0.75);
        txtPuntaje = this.add.text(570, 20, 'Puntaje: 0', { font: '24px Arial', fill: '#ffffff' });

        // Personaje
        this.personaje = this.add.sprite(100, 500, 'personaje');
        this.anims.create({
            key: 'izquierda',
            frames: this.anims.generateFrameNumbers('personaje', { start: 1, end: 4 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'derecha',
            frames: this.anims.generateFrameNumbers('personaje', { start: 6, end: 10 }),
            frameRate: 8,
            repeat: -1
        });
        this.personaje.play("izquierda", 10);

        //music
        musicPop = this.sound.add('pop');
        musicFail = this.sound.add('fail');
        musicFondo = this.sound.add("fondo");

        var musicConfig = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        musicFondo.play(musicConfig);

        this.input.on('dragstart', function (pointer, gameObject) { // Empieza a arrastrar
            gameObject.body.setVelocityY(0);
            gameObject.tint = Math.random() * 0xffffff;
        });
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) { // Arrastrando objeto
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        this.input.on('dragend', function (pointer, gameObject) { // Cuando se suelta el objeto
            gameObject.body.setVelocityY(gameObject.defaultVelocity);
            gameObject.tint = 0xFFFFFF;

            // Se elimina de la lista de items interactivos
            var index = items.indexOf(gameObject);
            if (index !== -1) items.splice(index, 1);

            if (colisiona(gameObject, glassBin)) {
                if (gameObject.category.startsWith("glass")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();

            } else if (colisiona(gameObject, plasticBin)) {
                if (gameObject.category.startsWith("plastic")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();

            } else if (colisiona(gameObject, metalBin)) {
                if (gameObject.category.startsWith("metal")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();

            } else if (colisiona(gameObject, paperBin)) {
                if (gameObject.category.startsWith("paper")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();

            } else if (colisiona(gameObject, organicBin)) {
                if (gameObject.category.startsWith("organic")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();

            } else if (colisiona(gameObject, eWasteBin)) {
                if (gameObject.category.startsWith("eWaste")) {
                    console.log("correcto");
                    musicPop.play();
                    puntaje += 5;
                } else {
                    console.log("incorrecto");
                    musicFail.play();
                    puntaje -= 5;
                }
                gameObject.destroy();
            }

            txtPuntaje.setText('Puntaje: ' + puntaje);
        });

        //timer = this.time.addEvent({ delay: 1000, callback: updateCounter, callbackScope: this, loop: true });
    }



    update() {

        //Personaje moviendose 
        if (this.personaje.x < 1000 && !sw) {
            this.personaje.x += 6;
            this.personaje.play("izquierda", 10);
        } else {
            if (this.personaje.x >= 1000 && !sw) {
                sw = true;
            } else {
                if (this.personaje.x > 200 && sw) {
                    this.personaje.x -= 6;
                    this.personaje.play("derecha", 10);
                } else {
                    sw = false;

                }

            }
        }

        if (items.length != 15) { // Generando items
            let random = Phaser.Math.Between(0, 5);
            let item;
            switch (random) {
                case 0: // eWasteBin (5)
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "eWaste" + Phaser.Math.Between(1, 5));
                    break;
                case 1: // glassBin (4)
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "glass" + Phaser.Math.Between(1, 4));
                    break;
                case 2: // metalBin (7)s
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "metal" + Phaser.Math.Between(1, 7));
                    break;
                case 3: // organicBin (8)
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "organic" + Phaser.Math.Between(1, 8));
                    break;
                case 4: // paperBin (4)
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "paper" + Phaser.Math.Between(1, 4));
                    break;
                case 5: // plasticBin (4)
                    item = new itemJuego(this, Phaser.Math.Between(200, 1100), 0, 30, "plastic" + Phaser.Math.Between(1, 4));
                    break;
            }
            if (item !== undefined) {
                if (colisionaArray(item, items)) {
                    item.destroy();
                } else {
                    items.push(item);
                }
            }
        }
        isOnFloor(items);
    }


    

}

function colisionaArray(item, items) {
    let sw = false;
    let i = 0;
    while (i < items.length && !sw) {
        if (colisiona(items[i], item)) {
            sw = true;
        }
        i++;
    }
    return sw;
}
function isOnFloor(array) {
    let i = 0;
    array.forEach(item => {
        if (item.y + item.height / 2 >= 650) { // Si está en el piso
            item.body.setVelocityY(0); // Se queda quieto
            item.input.draggable = false;  // No se puede arrastrar
            items.splice(i, 1);
        }
        i++;
    });


}
/*
updateCounter() {

    console.log(cont++);
    if (cont == 10) {
        timer.callback = null;
    }
}*/

function colisiona(item1, item2) {
    // Se hace el ajuste para que las posiciones sean desde la esquina superior izquierda
    return colision(item1.x - item1.width / 2, item1.y - item1.height / 2, item1.width, item1.height, item2.x - item2.width / 2, item2.y - item2.height / 2, item2.width, item2.height);
}

function colision(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 < x2 + w2 && x1 + w1 > x2 &&
        y1 < y2 + h2 && h1 + y1 > y2) {
        return true;
    }
    return false;
}