const FRUITS_DATA = {
  appleSpeed: 1,
  appleTextureName: "appleSprite",
  applePoints: 1,
  pearSpeed: 2,
  pearTextureName: "pearSprite",
  pearPoints: 2
}

class Fruit extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y){
    super(scene, x, y);
    scene.fruits.add(this);

    this.setPosition(x, y);

    // Create a random fruit.
    var random = Phaser.Math.Between(1,2);
    switch (random) {
      case 1:
        // Apple.
        this.Speed = FRUITS_DATA.appleSpeed;
        this.Points = FRUITS_DATA.applePoints;
        this.setTexture(FRUITS_DATA.appleTextureName);
      break;
      // Pear.
      case 2:
        this.Speed = FRUITS_DATA.pearSpeed;
        this.Points = FRUITS_DATA.pearPoints;
        this.setTexture(FRUITS_DATA.pearTextureName);
        break;
      default:
        break;
    }
  }

  update() {
    this.y += this.Speed;

    if (this.y > 480){
      this.destroy();
    }
  }
}
