var ganador;
export default class GameOver extends Phaser.Scene {

    constructor() {

        super({ key: 'gameover' });
    }

    init(gan) {
        ganador = gan;
    }

    create() {
        if (ganador) {
            this.add.text(595, 45, 'GANASTE', { font: '24px Arial', fill: '#ffffff' });
        } else {
            this.add.text(595, 45, 'PERDISTE', { font: '24px Arial', fill: '#ffffff' });
        }

    }
}