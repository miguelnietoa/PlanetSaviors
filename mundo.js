import itemJuego from './itemJuego.js';
const config = {
    width: 1300,
    height: 650,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
    }
}

var game = new Phaser.Game(config);
var timer;
var cont = 0;
var libros = [];
var bananas = [];
var tomates = [];

function init() {

}

function preload() {
    this.load.image("libro", "./assets/libro.png");
    this.load.image("banana", "./assets/banana.png");
    this.load.image("tomate", "./assets/tomate.png");
}

function create() {
    // this.cameras.main.backgroundColor.setTo(255,255,255); // Color de fondo de la escena

    this.input.on('dragstart', function (pointer, gameObject) { // Empieza a arrastrar
        gameObject.body.setVelocityY(0);
        gameObject.tint = Math.random() * 0xffffff;
    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) { // Arrastrando objeto
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    this.input.on('dragend', function (pointer, gameObject) { //Cuando se suelta el objeto
        gameObject.body.setVelocityY(gameObject.defaultVelocity);
        gameObject.tint = 0xFFFFFF;
    });
    timer = this.time.addEvent({ delay: 1000, callback: updateCounter, callbackScope: this, loop: true });
}


function update() {

    creacionDeItem(this);
    isOnFloor(bananas);
    isOnFloor(tomates);
    isOnFloor(libros);

}

function isOnFloor(array) {
    array.forEach(item => {
        if (item.y + item.height / 2 >= 650){ // Si está en el piso
            item.body.setVelocityY(0); // Se queda quieto
            item.input.draggable = false;  // No se puede arrastrar
        }
    });


}
function updateCounter() {

    console.log(cont++);
    if (cont == 10) {
        timer.callback = null;
    }
}

function creacionDeItem(scene) {
    let random = Phaser.Math.Between(0, 2);
    switch (random) {
        case 0:
            if (libros.length != 10) {
                let rnd = Phaser.Math.Between(0, 1300);
                let sw = false;
                libros.forEach(item => {
                    if (Math.abs(item.x - rnd) <= item.width) {
                        sw = true;
                    }
                });
                if (!sw) {
                    libros.push(new itemJuego(scene, rnd, -30, 10, "libro"));
                }

            }

            break;
        case 1:
            if (tomates.length != 5) {
                tomates.push(new itemJuego(scene, Phaser.Math.Between(0, 1300), -30, 20, "tomate"));

            }
            break;
        case 2:
            if (bananas.length != 2) {
                bananas.push(new itemJuego(scene, Phaser.Math.Between(0, 1300), -30, 30, "banana"));
            }
            break;
    }


}

function colisiona(item1, item2) {
    
}
