class GameScene extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.add.text(20, 20, "Game scene");
  }
}
