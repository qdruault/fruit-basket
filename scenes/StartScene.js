class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  preload() {
    this.load.image("background", "ressources/images/forest.png");
    this.load.image("player", "ressources/images/basket.png");
    this.load.image("appleSprite", "ressources/images/apple.png");
    this.load.image("pearSprite", "ressources/images/pear.png");
  }

  create() {
    // Background image
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    // Title of the game.
    this.add.text(140, 30, "Fruit Basket", {font: "48px Consolas", fill: "#FFD133", stroke: "black", strokeThickness : 8});

    // Start game text.
    this.add.text(90, 300, "Press any key to continue", {font: "32px Consolas", fill: "#61FF33", stroke: "black", strokeThickness : 6});

    // Authors.
    this.add.text(380, 455, "By B. DEFILIPPIS and Q. DRUAULT-AUBIN", {font: "12px Consolas", fill: "#FFFFFF", stroke: "black", strokeThickness : 4});
  }

  startGame() {
    this.scene.start("GameScene");
  }

  update() {
    // Start the game if the user press ENTER/SPACE.
    if (this.input.keyboard.addKey('ENTER').isDown || this.input.keyboard.addKey('SPACE').isDown) {
        this.startGame();
    }
  }
}
