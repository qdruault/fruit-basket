var config = {
  width: 800,
  height: 800,
  backgroundColor: 0x009900,
  scene: [StartScene, GameScene]
}

window.onload = function(){
  var game = new Phaser.Game(config);
}
