//import mundo from './public/mundo.js';
const config = {
    width: 786,
    height: 786,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    audio: {
        disableWebAudio: true
    },
    physics: {
        default: "arcade",
    }
}

var it;
var game = new Phaser.Game(config);

function init() {  
}

function preload(){
    this.load.image("fondomenu", "../assets/menu/fondo2.png");
    this.load.image("play", "../assets/menu/play.png");
    this.load.audio("music", "../assets/music/shuinvy-childhood.mp3");
    
}

function create(){
    this.add.image(0, 0, 'fondomenu').setOrigin(0, 0);
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height/ 1.5, 'play').setDepth(1);

    playButton.setInteractive();

        playButton.on("pointerup", () => {
            console.log("correcto");
            

        })
        var musicFondo = this.sound.add("music");
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
}

function update(){

}