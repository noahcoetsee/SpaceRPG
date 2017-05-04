var game = new Phaser.Game(800, 600, Phaser.AUTO, "SpaceRPG Test: Controls", { preload: preload, create: create, update: update });

// Variables
var space;
var player;
var turret;

// Preload
function preload() {
  // Game Scaling
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  
  game.load.image('space', '../assets/images/deepspace.jpg');
  game.load.image('frigate', '../assets/images/Human-Frigate.png');
  game.load.image('turret', '../assets/images/turret.png');
}

// Create
function create() {
  space = game.add.tileSprite(game.world.centerX, game.world.centerY, 5000, 5000, 'space');
  
  game.world.setBounds(0, 0, 5000, 5000);
  
  game.physics.startSystem(Phaser.Physics.ARCADE);
  
  player = game.add.sprite(game.world.centerX, game.world.centerY, 'frigate');
  player.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(player);
  player.body.angularDrag = 50;
  player.body.maxAngular = 500;
  
}

// Update
function update() {
  
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    sprite.body.angularVelocity = -200;
  }
  
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      sprite.body.angularVelocity = 200;
    }
  
  if(game.input.keyboard.isDown(Phaser.Keyboard.UP) {
     game.physics.arcade.velocityFromAngle(player.angle, 300, player.body.velocity);
  }
}
