class StartScene extends Phaser.Scene {
  constructor() {
    super("startGame");
  }

  preload() {
    this.load.image("background", "ressources/images/forest.png")
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.add.text(20, 20, "Start scene");

    //this.scene.start("playGame")
  }
}
