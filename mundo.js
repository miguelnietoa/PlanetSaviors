const config = {
    width: 1300,
    height: 650,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    },
    physics:{
        default:"arcade",
        
    }
}

var game = new Phaser.Game(config);

function init(){

}

function preload(){
    this.load.image("bola","./assets/bola.png");
}

function create(){
    this.bola = this.physics.add.image(100,0,"bola");
    this.bola.setVelocity(0,20);
    this.bola.setInteractive();
    this.input.setDraggable(this.bola);

    this.input.on('dragstart', function (pointer, gameObject){

    });
    this.input.on('drag', function(pointer, gameObject, dragX, dragY) { // Arrastrando objeto
        gameObject.x = dragX;
        gameObject.y = dragY;
    })
    this.input.on('dragend', function(pointer, gameObject){ //Cuando se suelta el objeto

    })
}

function update(){
    
}
