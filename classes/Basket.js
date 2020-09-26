class Basket extends Phaser.GameObjects.Sprite{
  constructor(scene){
    super(scene);

    this.setPosition(config.width/2, config.height - 50);

    this.setTexture("basket");
    this.setScale(0.80);

    this.scene = scene;
  }

  update() {
    if (this.scene.input.keyboard.addKey('LEFT').isDown && this.x >= 75) {
      this.x-=2;
    }
    else if (this.scene.input.keyboard.addKey('RIGHT').isDown && this.x <= config.width - 75) {
      this.x+=2;
    }
  }
}
