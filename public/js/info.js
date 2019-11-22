import Menu from "./menu.js";
export default class Info extends Phaser.Scene {

    constructor() {
        super({ key: 'info' });

    }

    create() {

        this.add.image(-80, -20, '199').setOrigin(0, 0);
        this.add.image(80*2, 110, 'fIzq');
        this.add.text(80*2.5, (100)-35, 'Contenedor para vidrios', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((80*2.5)+50, (100*2)-35, 'glass1');
        this.add.image((80*2.5)+100, (100*2)-35, 'glass2');
        this.add.image((80*2.5)+150, (100*2)-35, 'glass3');
        this.add.image((80*2.5)+200, (100*2)-35, 'glass4');
        this.add.text(80*2.5, (105*3)-35, 'Contenedor para plastico', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((80*2.5)+50, (100*4)-35, 'plastic1');
        this.add.image((80*2.5)+100, (100*4)-35, 'plastic2');
        this.add.image((80*2.5)+150, (100*4)-35, 'plastic3');
        this.add.image((80*2.5)+200, (100*4)-35, 'plastic4');
        this.add.text(80*2.5, (107*5)-35, 'Contenedor para metales', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((80*2)+50, (100*6)-35, 'metal1');
        this.add.image((80*2)+100, (100*6)-35, 'metal2');
        this.add.image((80*2)+150, (100*6)-35, 'metal3');
        this.add.image((80*2)+200, (100*6)-35, 'metal4');
        this.add.image((80*2)+250, (100*6)-35, 'metal5');
        this.add.image((80*2)+300, (100*6)-35, 'metal6');
        this.add.image((80*2)+350, (100*6)-35, 'metal7');
        this.add.image(80*2, 110 * 3, 'fIzq');
        this.add.image(80*2, 110 * 5, 'fIzq');
        this.add.image(80, 110, 'glassBin').setScale(0.8);
        this.add.image(80, 110 * 3, 'plasticBin').setScale(0.75);
        this.add.image(80, 110 * 5, 'metalBin').setScale(0.75);
        this.add.image(1220/1.07, 110, 'fDer');
        this.add.image(1220/1.07, 110 * 3, 'fDer');
        this.add.image(1220/1.07, 110 * 5, 'fDer');
        this.add.image(1220, 110, 'paperBin').setScale(0.8);
        this.add.text(1220/1.525, (100)-35, 'Contenedor para papel', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((1220/1.525)+50, (100*2)-35, 'paper1');
        this.add.image((1220/1.525)+100, (100*2)-35, 'paper2');
        this.add.image((1220/1.525)+150, (100*2)-35, 'paper3');
        this.add.image((1220/1.525)+200, (100*2)-35, 'paper4');
        this.add.image(1220, 110 * 3, 'organicBin').setScale(0.75);
        this.add.text(1220/1.9, (100*3)-35, 'Contenedor de materiales organicos', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((1220/1.9)+50, (100*4)-35, 'organic1');
        this.add.image((1220/1.9)+100, (100*4)-35, 'organic2');
        this.add.image((1220/1.9)+150, (100*4)-35, 'organic3');
        this.add.image((1220/1.9)+200, (100*4)-35, 'organic4');
        this.add.image((1220/1.9)+250, (100*4)-35, 'organic5');
        this.add.image((1220/1.9)+300, (100*4)-35, 'organic6');
        this.add.image((1220/1.9)+350, (100*4)-35, 'organic7');
        this.add.image((1220/1.9)+400, (100*4)-35, 'organic8');
        this.add.image(1220, 110 * 5, 'eWasteBin').setScale(0.75);
        this.add.text(1220/1.9, (107*5)-35, 'Contenedor para electrodomesticos', { font: '30px Arial', fill: '#182d3b' });
        this.add.image((1220/1.7)+50, (100*6)-35, 'eWaste1');
        this.add.image((1220/1.7)+100, (100*6)-35, 'eWaste2');
        this.add.image((1220/1.7)+180, (100*6)-35, 'eWaste3');
        this.add.image((1220/1.7)+260, (100*6)-35, 'eWaste4');
        this.add.image((1220/1.7)+320, (100*6)-35, 'eWaste5');
        let backButton = this.add.image(20, 0, 'back').setOrigin(0, 0);

        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.scene.stop();
            game.scene.bringToTop('menu');

        });
    }
    


}