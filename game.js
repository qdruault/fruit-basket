const config = {
  width: 640,
  height: 480,
  backgroundColor: 0x009900,
  scene: [StartScene, GameScene],
  type: Phaser.AUTO,
  physics: {
    default: 'arcade'
  }
}

window.onload = function(){
  var game = new Phaser.Game(config);
}
