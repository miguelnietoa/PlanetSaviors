
export default class menu extends Phaser.Scene {

    constructor() {

        super({ key: 'menu' });
    }



    init() {
    }

    preload() {
        this.load.image("fondomenu", "../assets/menu/fondo2.png");
        this.load.image("play", "../assets/menu/play.png");
        this.load.audio("music", "../assets/music/shuinvy-childhood.mp3");
        this.load.image("sonido", "../assets/Sonido/Consonido.png");
        this.load.image("sinsonido", "../assets/Sonido/Sinsonido.png");

    }

    create() {
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.5, 'fondomenu').setDepth(1);
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.5, 'play').setDepth(1);

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

        const clickButton = this.add.image(25, 25, 'sonido')
            .setInteractive()
            .on('pointerup', () => musicFondo.resume()

            )
            ;
        const clickButtont = this.add.image(75, 25, 'sinsonido')
           .setInteractive()
            .on('pointerup', () => musicFondo.pause()
            );

            playButton.setInteractive();

            playButton.on("pointerup", () => {
                musicFondo.destroy();

                this.scene.start('juego');
                console.log("correcto");
            });

    }

    update() {
    }
}