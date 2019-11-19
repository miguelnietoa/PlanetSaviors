export default class itemJuego extends Phaser.GameObjects.Sprite {

    constructor(scene, id, x, y, velocityY, type) {
        super(scene, x, y, type);
        this.category = type;
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.defaultVelocity = velocityY;
        this.body.setVelocityY(velocityY);
        this.setInteractive();
        scene.input.setDraggable(this);
        this.id = id;
        this.dragID = undefined;
    }

}