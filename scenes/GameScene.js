class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    // Background image
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.add.text(20, 20, "SCORE", {font: "25px Consolas", fill: "#FFD133", stroke: "black", strokeThickness : 6});

    this.fruits = this.add.group();

    this.count = 0;
  }

  update() {
    // Quit the game if the user press ESC.
    if (this.input.keyboard.addKey('ESC').isDown) {
        this.quitGame();
    }

    this.count++;
    if (this.count == 80)
    {
      this.createFruit();
      this.count = 0;
    }

    for(var i = 0; i < this.fruits.getChildren().length; i++){
      var fruit = this.fruits.getChildren()[i];
      fruit.update();
    }

  }

  quitGame() {
    this.scene.start("StartScene");
  }

  createFruit(){
    var fruit = new Fruit(this, this.generateRandomPosition(config.width), 0);
    this.add.existing(fruit);
  }

  generateRandomPosition(referenceValue) {
    return Phaser.Math.Between(10, referenceValue - 10);
  }
}
