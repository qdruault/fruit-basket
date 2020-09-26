const fruitsData = {
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

    var random = Phaser.Math.Between(1,2);
    switch (random) {
      case 1:
        this.Speed = fruitsData.appleSpeed;
        this.Points = fruitsData.applePoints;
        this.setTexture(fruitsData.appleTextureName);
        this.setScale(0.5);
        break;
      case 2:
        this.Speed = fruitsData.pearSpeed;
        this.Points = fruitsData.pearPoints;
        this.setTexture(fruitsData.pearTextureName);
        this.setScale(0.5);
        break;
      default:
        break;
    }
  }

  update() {
    var newY = this.y;
    newY += this.Speed;
    this.setPosition(this.x, newY);

    if (this.y > 480){
      this.destroy();
    }
  }
}
