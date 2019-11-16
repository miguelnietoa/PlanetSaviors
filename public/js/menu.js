var sw = false;
export default class Menu extends Phaser.Scene {

    constructor() {

        super({ key: 'menu' });
    }

    create() {

        this.socket = io();
        var self = this;
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
            console.log("da en play");
            if (!sw){
                this.socket.emit('ready');
                sw = true;
            }
            
        });

        this.socket.on('startGame', ()=>{
            musicFondo.destroy();
            game.scene.start('mundo', this.socket);
        });

    }

    update() {
    }
}