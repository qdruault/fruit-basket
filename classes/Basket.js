const BASKET_SPEED = 8

class Basket extends Phaser.GameObjects.Sprite{
  constructor(scene){
    super(scene);
    this.setPosition(config.width/2, config.height - 50);
    this.setTexture("basket");
    this.scene = scene;
  }

  update() {
    // Move the basket.
    if (this.scene.input.keyboard.addKey('LEFT').isDown && this.x >= 75) {
      this.x-= BASKET_SPEED;
    }
    else if (this.scene.input.keyboard.addKey('RIGHT').isDown && this.x <= config.width - 75) {
      this.x+= BASKET_SPEED;
    }
  }
}
