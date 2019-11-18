import Menu from "./menu.js";

export default class Creditos extends Phaser.Scene {

    constructor() {
        super({ key: 'creditos' });

    }
    create() {
        this.add.image(-80, -20, '199').setOrigin(0, 0);
        let backButton = this.add.image(20, 20, 'back').setOrigin(0, 0);
        this.add.text(380, 20, 'DESARROLLADORES', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(480, 20*5, 'Jesús Angulo', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(490, 20*8, 'Miguel Nieto', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(480, 20*11, 'Johan Mendez', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(450, 20*18, 'REFERENCIAS', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(100, 20*24, 'Efectos de sonido tomado de: www.zapsplat.com/', { font: '50px Arial', fill: '#182d3b' });
        this.add.text(10, 20*21, 'Elementos de reciclaje diseñado por: brgfx de Freepik.es', { font: '50px Arial', fill: '#182d3b' });
        


        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.scene.stop();
            game.scene.bringToTop('menu');

        });






    }



}