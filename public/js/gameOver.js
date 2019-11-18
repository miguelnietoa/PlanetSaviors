import Menu from './menu.js';
export default class GameOver extends Phaser.Scene {

    constructor() {

        super({ key: 'gameover' });
    }

    init(gan) {
        this.str = gan;
    }

    create() {
        this.add.image(-80, -20, 'end').setOrigin(0, 0);
        this.add.text(400, 300, this.str, { font: '120px Futura', fill: '#182d3b' });

    }
}