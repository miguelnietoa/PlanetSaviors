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
var items = [];
var txtPuntaje;
var glassBin, plasticBin, metalBin, paperBin, organicBin, eWasteBin;
var puntaje = 0;

function init() {

}

function preload() {
    this.load.image("eWasteBin", "./assets/e-WasteBin/binE-Waste.png");
    this.load.image("eWaste1", "./assets/e-WasteBin/calculator_1.png");
    this.load.image("eWaste2", "./assets/e-WasteBin/foco.png");
    this.load.image("eWaste3", "./assets/e-WasteBin/microondas.png");
    this.load.image("eWaste4", "./assets/e-WasteBin/Recurso 10.png");
    this.load.image("eWaste5", "./assets/e-WasteBin/Recurso 11.png");
    this.load.image("glassBin", "./assets/glassBin/binGlass.png");
    this.load.image("glass1", "./assets/glassBin/Recurso 3.png");
    this.load.image("glass2", "./assets/glassBin/Recurso 14.png");
    this.load.image("glass3", "./assets/glassBin/Recurso 27.png");
    this.load.image("glass4", "./assets/glassBin/Recurso 28.png");
    this.load.image("metalBin", "./assets/metalBin/binMetal.png");
    this.load.image("metal1", "./assets/metalBin/lata.png");
    this.load.image("metal2", "./assets/metalBin/lata1.png");
    this.load.image("metal3", "./assets/metalBin/lata2.png");
    this.load.image("metal4", "./assets/metalBin/lata3.png");
    this.load.image("metal5", "./assets/metalBin/lata4.png");
    this.load.image("metal6", "./assets/metalBin/Recurso 9.png");
    this.load.image("metal7", "./assets/metalBin/tijera.png");
    this.load.image("organicBin", "./assets/organicBin/organicc_1.png");
    this.load.image("organic1", "./assets/organicBin/bone.png");
    this.load.image("organic2", "./assets/organicBin/pimenton2.png");
    this.load.image("organic3", "./assets/organicBin/Recurso 5.png");
    this.load.image("organic4", "./assets/organicBin/Recurso 6.png");
    this.load.image("organic5", "./assets/organicBin/Recurso 7.png");
    this.load.image("organic6", "./assets/organicBin/Recurso 22.png");
    this.load.image("organic7", "./assets/organicBin/Recurso 23.png");
    this.load.image("organic8", "./assets/organicBin/zanahoria.png");
    this.load.image("paperBin", "./assets/paperBin/binPaper.png");
    this.load.image("paper1", "./assets/paperBin/book.png");
    this.load.image("paper2", "./assets/paperBin/Recurso 18.png");
    this.load.image("paper3", "./assets/paperBin/Recurso 20.png");
    this.load.image("paper4", "./assets/paperBin/Recurso 21.png");
    this.load.image("plasticBin", "./assets/plasticBin/binPlastic.png");
    this.load.image("plastic1", "./assets/plasticBin/Recurso 4.png");
    this.load.image("plastic2", "./assets/plasticBin/Recurso 32.png");
    this.load.image("plastic3", "./assets/plasticBin/Recurso 33.png");
    this.load.image("plastic4", "./assets/plasticBin/Recurso 35.png");

}

function create() {
    // this.cameras.main.backgroundColor.setTo(255,255,255); // Color de fondo de la escena
    glassBin = this.add.image(80, 110, 'glassBin').setScale(0.8);
    plasticBin = this.add.image(80, 110 * 3, 'plasticBin').setScale(0.75);
    metalBin = this.add.image(80, 110 * 5, 'metalBin').setScale(0.75);
    paperBin = this.add.image(1220, 110, 'paperBin').setScale(0.8);
    organicBin = this.add.image(1220, 110 * 3, 'organicBin').setScale(0.75);
    eWasteBin = this.add.image(1220, 110 * 5, 'eWasteBin').setScale(0.75);
    txtPuntaje = this.add.text(570, 20, 'Puntaje: 0', { font: '24px Arial', fill: '#ffffff' });
    



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
        if (colisiona(gameObject, glassBin)) {
            console.log("sdf");
            if (gameObject.category.startsWith("glass")) {
                console.log("correcto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje += 5;
            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }
        } else if (colisiona(gameObject, plasticBin)) {
            if (gameObject.category.startsWith("plastic")) {
                console.log("correcto");
                gameObject.destroy();
                puntaje += 5;
            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }

        } else if (colisiona(gameObject, metalBin)) {
            if (gameObject.category.startsWith("metal")) {
                console.log("correcto");
                gameObject.destroy();
                puntaje += 5;
            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }

        } else if (colisiona(gameObject, paperBin)) {
            if (gameObject.category.startsWith("paper")) {
                console.log("correcto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje += 5;
                

            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }

        } else if (colisiona(gameObject, organicBin)) {
            if (gameObject.category.startsWith("organic")) {
                console.log("correcto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje += 5;
            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }

        } else if (colisiona(gameObject, eWasteBin)) {
            if (gameObject.category.startsWith("eWaste")) {
                console.log("correcto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje += 5;
            } else {
                console.log("incorrecto");
                var index = items.indexOf(gameObject);
                if (index !== -1) items.splice(index, 1);
                gameObject.destroy();
                puntaje -= 5;
            }

        }
        txtPuntaje.setText('Puntaje: ' + this.puntaje);
    });
    
    timer = this.time.addEvent({ delay: 1000, callback: updateCounter, callbackScope: this, loop: true });
}


function update() {

    if (items.length != 15) { // Generando items
        let random = Phaser.Math.Between(0, 5);
        let item;
        switch (random) { // VA EN 200
            case 0: // eWasteBin (5)

                item = new itemJuego(this, 200, 0, 30, "eWaste" + Phaser.Math.Between(1, 5));
                break;
            case 1: // glassBin (4)
                item = new itemJuego(this, Phaser.Math.Between(160, 1100), 0, 30, "glass" + Phaser.Math.Between(1, 4));
                break;
            case 2: // metalBin (7)s
                item = new itemJuego(this, Phaser.Math.Between(160, 1100), 0, 30, "metal" + Phaser.Math.Between(1, 7));
                break;
            case 3: // organicBin (8)
                item = new itemJuego(this, Phaser.Math.Between(160, 1100), 0, 30, "organic" + Phaser.Math.Between(1, 8));
                break;
            case 4: // paperBin (4)
                item = new itemJuego(this, Phaser.Math.Between(160, 1100), 0, 30, "paper" + Phaser.Math.Between(1, 4));
                break;
            case 5: // plasticBin (4)
                item = new itemJuego(this, Phaser.Math.Between(160, 1100), 0, 30, "plastic" + Phaser.Math.Between(1, 4));
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
function updateCounter() {

    console.log(cont++);
    if (cont == 10) {
        timer.callback = null;
    }
}

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

