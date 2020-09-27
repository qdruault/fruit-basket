const FRUIT_DROP = 80;

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    // Background image
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
    // Score display.
    this.add.text(20, 20, "SCORE", {font: "25px Consolas", fill: "#FFD133", stroke: "black", strokeThickness : 6});

    // The fruits.
    this.fruits = this.add.group();
    this.count = FRUIT_DROP - 1;
    // The basket.
    this.basket = new Basket(this);
    // Make it appear in front of everything.
    this.basket.depth = 99;
    this.add.existing(this.basket);
  }

  update() {
    // Quit the game if the user press ESC.
    if (this.input.keyboard.addKey('ESC').isDown) {
        this.quitGame();
    }

    // Create a fruit every X frames.
    this.count++;
    if (this.count == FRUIT_DROP)
    {
      this.createFruit();
      this.count = 0;
    }

    // Update each fruit.
    for(var i = 0; i < this.fruits.getChildren().length; i++){
      var fruit = this.fruits.getChildren()[i];
      fruit.update();
    }

    // Update the basket.
    this.basket.update();
  }

  quitGame() {
    this.scene.start("StartScene");
  }

  createFruit(){
    var fruit = new Fruit(this, this.generateRandomPosition(), 0);
    this.add.existing(fruit);
  }

  generateRandomPosition() {
    return 70 * Phaser.Math.Between(1, 8);
  }
}
