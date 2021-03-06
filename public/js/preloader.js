export default class Preloader extends Phaser.Scene{
    constructor(){
        super('preloader')
    }

    preload(){
        this.load.on('complete', () => {
            this.scene.start('menu');
        }, this);
        this.load.image("fIzq", "../assets/menu/flechaIzq.png");
        this.load.image("fDer", "../assets/menu/flechaDer.png");
        this.load.image("199", "../assets/menu/199.png");
        this.load.image("info", "../assets/menu/informacion.png");
        this.load.image("end", "../assets/menu/end.png");
        this.load.image("back", "../assets/menu/back.png");
        this.load.image("titulo", "../assets/menu/Titulo.png");
        this.load.image("play", "../assets/menu/playnuevo.png");
        this.load.image("creditos", "../assets/menu/creditos.png");
        this.load.image("fondomundo", "../assets/menu/fondomundo.png");
        this.load.audio("music", "../assets/music/shuinvy-childhood.mp3");
        this.load.image("sonido", "../assets/Sonido/Consonido.png");
        this.load.image("sinsonido", "../assets/Sonido/Sinsonido.png");
        this.load.spritesheet("personaje", "../assets/Spritesprueba.png", { frameWidth: 150, frameHeight: 300 });
        this.load.image("eWasteBin", "../assets/eWasteBin/binE-Waste.png");
        this.load.image("eWaste1", "../assets/eWasteBin/calculator_1.png");
        this.load.image("eWaste2", "../assets/eWasteBin/foco.png");
        this.load.image("eWaste3", "../assets/eWasteBin/microondas.png");
        this.load.image("eWaste4", "../assets/eWasteBin/Recurso 10.png");
        this.load.image("eWaste5", "../assets/eWasteBin/Recurso 11.png");
        this.load.image("glassBin", "../assets/glassBin/binGlass.png");
        this.load.image("glass1", "../assets/glassBin/Recurso 3.png");
        this.load.image("glass2", "../assets/glassBin/Recurso 14.png");
        this.load.image("glass3", "../assets/glassBin/Recurso 27.png");
        this.load.image("glass4", "../assets/glassBin/Recurso 28.png");
        this.load.image("metalBin", "../assets/metalBin/binMetal.png");
        this.load.image("metal1", "../assets/metalBin/lata.png");
        this.load.image("metal2", "../assets/metalBin/lata1.png");
        this.load.image("metal3", "../assets/metalBin/lata2.png");
        this.load.image("metal4", "../assets/metalBin/lata3.png");
        this.load.image("metal5", "../assets/metalBin/lata4.png");
        this.load.image("metal6", "../assets/metalBin/Recurso 9.png");
        this.load.image("metal7", "../assets/metalBin/tijera.png");
        this.load.image("organicBin", "../assets/organicBin/organicc_1.png");
        this.load.image("organic1", "../assets/organicBin/bone.png");
        this.load.image("organic2", "../assets/organicBin/pimenton2.png");
        this.load.image("organic3", "../assets/organicBin/Recurso 5.png");
        this.load.image("organic4", "../assets/organicBin/Recurso 6.png");
        this.load.image("organic5", "../assets/organicBin/Recurso 7.png");
        this.load.image("organic6", "../assets/organicBin/Recurso 22.png");
        this.load.image("organic7", "../assets/organicBin/Recurso 23.png");
        this.load.image("organic8", "../assets/organicBin/zanahoria.png");
        this.load.image("paperBin", "../assets/paperBin/binPaper.png");
        this.load.image("paper1", "../assets/paperBin/book.png");
        this.load.image("paper2", "../assets/paperBin/Recurso 18.png");
        this.load.image("paper3", "../assets/paperBin/Recurso 20.png");
        this.load.image("paper4", "../assets/paperBin/Recurso 21.png");
        this.load.image("plasticBin", "../assets/plasticBin/binPlastic.png");
        this.load.image("plastic1", "../assets/plasticBin/Recurso 4.png");
        this.load.image("plastic2", "../assets/plasticBin/Recurso 32.png");
        this.load.image("plastic3", "../assets/plasticBin/Recurso 33.png");
        this.load.image("plastic4", "../assets/plasticBin/Recurso 35.png");
        this.load.image("background", "../assets/background.png");
        this.load.audio("fondo", "../assets/music/fondo.mp3");
        this.load.audio("fail", "../assets/music/fail.mp3");
        this.load.audio("pop", "../assets/music/pop.mp3");
    }
}