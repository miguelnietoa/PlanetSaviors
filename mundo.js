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
var bolas = [];
var frascos = [];
var tomates = [];

function init() {

}

function preload() {
    this.load.image("bola", "./assets/bola.png");
    this.load.image("frasco", "./assets/frasco.png");
    this.load.image("tomate", "./assets/tomate.png");
}

function create() {
    this.input.on('dragstart', function (pointer, gameObject) { // Empieza a arrastrar
        gameObject.body.setVelocityY(0);
    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) { // Arrastrando objeto
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    this.input.on('dragend', function (pointer, gameObject) { //Cuando se suelta el objeto
        gameObject.body.setVelocityY(gameObject.defaultVelocity);
    });
    timer = this.time.addEvent({ delay: 1000, callback: updateCounter, callbackScope: this, loop: true });
}


function update() {
    creacionDeItem(this);

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
            if (bolas.length != 10) {
                let rnd = Phaser.Math.Between(0, 1300);
                let sw = false;
                bolas.forEach(item => {
                    if (Math.abs(item.x - rnd) <= item.width) {
                        sw = true;
                    }
                });
                if (!sw){
                    bolas.push(new itemJuego(scene, rnd, -30, 10, "bola"));
                }

            }
            
            break;
        case 1:
            if (tomates.length != 5) {
                tomates.push(new itemJuego(scene, Phaser.Math.Between(0, 1300), -30, 20, "tomate"));

            }
            break;
        case 2:
            if (frascos.length != 2) {
                frascos.push(new itemJuego(scene, Phaser.Math.Between(0, 1300), -30, 30, "frasco"));
            }
            break;
    }


}
