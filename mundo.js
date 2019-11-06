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
    this.load.image("ContenedorRojo", "./assets/e-WasteBin/binE-Waste.png");
    this.load.image("Calculadora","./assets/e-WasteBin/calculator_1.png" );
    this.load.image("foco","./assets/e-WasteBin/foco.png");
    this.load.image("microondas","./assets/e-WasteBin/microondas.png");
    this.load.image("BateriaOne","./assets/e-WasteBin/Recurso 10.png");
    this.load.image("BateriaTwo","./assets/e-WasteBin/Recurso 11.png");
    this.load.image("ContenedorAzul","./assets/glassBin/binGlass.png");
    this.load.image("VidrioOne","./assets/glassBin/Recurso 3.png");
    this.load.image("VidrioTwo","./assets/glassBin/Recurso 14.png");
    this.load.image("VidrioThree","./assets/glassBin/Recurso 27.png");
    this.load.image("VidrioFour","./assets/glassBin/Recurso 28.png");
    this.load.image("Metalbin","./assets/metalBin/binMetal.png");
    this.load.image("MetalOne","./assets/metalBin/lata.png");
    this.load.image("MetalTwo","./assets/metalBin/lata1.png");
    this.load.image("MetalThree","./assets/metalBin/lata2.png");
    this.load.image("MetalFour","./assets/metalBin/lata3.png");
    this.load.image("MetalFive","./assets/metalBin/lata4.png");
    this.load.image("MetalSix","./assets/metalBin/Recurso 9.png");
    this.load.image("MetalSeven","./assets/metalBin/tijera.png");
    this.load.image("OrganicBin","./assets/organicBin/organicc_1.png");
    this.load.image("OrganicOne","./assets/organicBin/bone.png");
    this.load.image("OrganicTwo","./assets/organicBin/pimentorn2.png");
    this.load.image("OrganicThree","./assets/organicBin/Recurso 5.png");
    this.load.image("OrganicFour","./assets/organicBin/Recurso 6.png");
    this.load.image("OrganicFive","./assets/organicBin/Recurso 7.png");
    this.load.image("OrganicSix","./assets/organicBin/Recurso 22.png");
    this.load.image("OrganicSeven","./assets/organicBin/Recurso 23.png");
    this.load.image("OrganicEight","./assets/organicBin/zanahoria.png");
    this.load.image("PaperBin","./assets/paperBin/binPaper.png");
    this.load.image("PaperOne","./assets/paperBin/book.png");
    this.load.image("PaperTwo","./assets/paperBin/Recurso 18.png");
    this.load.image("PaperThree","./assets/paperBin/Recurso 20.png");
    this.load.image("PaperFour","./assets/paperBin/Recurso 21.png");
    this.load.image("Plasticbin","./assets/plasticBin/binPlastic.png");
    this.load.image("PlasticOne","./assets/plasticBin/Recurso 4.png");
    this.load.image("PlasticTwo","./assets/plasticBin/Recurso 32.png");
    this.load.image("PlasticThree","./assets/plasticBin/Recurso 33.png");
    this.load.image("PlasticFour","./assets/plasticBin/Recurso 35.png");
  
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
