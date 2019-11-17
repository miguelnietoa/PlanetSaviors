import Mundo from './mundo.js';
import Menu from './menu.js';
import Preloader from './preloader.js';
import Creditos from './creditos.js';

const config = {
    width: 1300,
    height: 650,
    parent: "container",
    type: Phaser.AUTO,
    
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    audio: {
        disableWebAudio: false
    },
    physics: {
        default: "arcade",
    }
}

class Juego extends Phaser.Game{
    constructor(){
        super(config);
        this.scene.add('menu', new Menu());
        this.scene.add('mundo', new Mundo());
        this.scene.add('preloader', new Preloader());
        this.scene.add('creditos', new Creditos());
        this.scene.start('preloader');
    }
}

window.game = new Juego();