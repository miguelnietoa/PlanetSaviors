export default class itemJuego extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, velocityY, type) {
        super(scene, x, y, type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setVelocityY(velocityY);
        this.setInteractive();
        scene.input.setDraggable(this);
        
    }
}