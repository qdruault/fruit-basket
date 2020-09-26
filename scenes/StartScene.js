class StartScene extends Phaser.Scene {
  constructor() {
    super("startGame");
  }

  create() {
    this.add.text(20, 20, "Start scene");
    this.scene.start("playGame")
  }
}
