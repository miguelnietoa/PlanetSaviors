import bolas from './bolas.js';
import tomates from './tomates.js';
import frascos from './frascos.js';
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

function init() {

}

var nbolas = 0;
var ntomate = 0;
var nfrasco = 0;


function preload() {
    this.load.image("bola", "./assets/bola.png");
    this.load.image("frasco", "./assets/frasco.png");
    this.load.image("tomate", "./assets/tomate.png");
}

function create() {
    //this.bola = this.physics.add.image(100, 0, "bola");
    //this.bola.setVelocity(0, 20);
    //this.bola.setInteractive();
    //this.input.setDraggable(this.bola);

    
    this.input.on('dragstart', function (pointer, gameObject) {

    });
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) { // Arrastrando objeto
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    this.input.on('dragend', function (pointer, gameObject) { //Cuando se suelta el objeto

    });
}


function update() {
    creacionDeItem(this);
}

function creacionDeItem(scene) {
    var random = Phaser.Math.Between(0, 2);
    switch (random) {
        case 0:
            if (nbolas != 10) {
                var bola = new bolas(scene, Phaser.Math.Between(0, 1300), -30, 10, "bola");
                nbolas++;
            }
            break;
        case 1:
            if (ntomate != 5) {
                var tomate = new tomates(scene, Phaser.Math.Between(0, 1300), -30, 20, "tomate");
                ntomate++;
            }
            break;
        case 2:
            if (nfrasco != 2) {
                var frasco = new frascos(scene, Phaser.Math.Between(0, 1300), -30, 30, "frasco");
                nfrasco++;
            }
            break;
    }


}
