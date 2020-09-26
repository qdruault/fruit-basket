class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.add.text(20, 20, "Game scene", {font: "25px Arial", fill: "yellow"});
  }

  quitGame() {
    this.scene.start("StartScene");
  }

  update() {
    // Quit the game if the user press ESC.
    if (this.input.keyboard.addKey('ESC').isDown) {
        this.quitGame();
    }
  }
}
