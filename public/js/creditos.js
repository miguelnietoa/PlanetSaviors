import Menu from "./menu.js";

export default class Creditos extends Phaser.Scene {

    constructor() {
        super({ key: 'creditos' });

    }
    create() {
        this.add.image(-80, -20, 'background').setOrigin(0, 0);
        let backButton = this.add.image(20, 20, 'back').setOrigin(0, 0);

        backButton.setInteractive();
        backButton.on("pointerup", () => {
            game.scene.bringToTop('menu');

        });






    }



}