import { Scene } from 'phaser';
import { Player } from '../../classes/player.js';
import { PirateShip } from '../../classes/pirate_ship.js';

export class LoadingScene extends Scene {
  constructor() {
    console.log('initializing this, does it work?')
    console.log('Current directory: ' + process.cwd())

    super('loading-scene');
  }

  preload() {
    this.load.baseURL = 'assets/'
    // path from baseURL to file: 'sprites/king.png'

	  this.load.image('pirate', 'treasure-hunters/idle-01.png');
    this.load.atlas('a-pirate', 'treasure-hunters/captain-clown-nose/captain_atlas.png' ,'treasure-hunters/captain-clown-nose/captain_atlas.json');
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
    this.load.image('ship-hull', 'treasure-hunters/merchant-ship/Sprites/Ship/Ship/Idle/1.png');
    this.load.image('ship-flag', 'treasure-hunters/merchant-ship/Sprites/Ship/Sail/Wind/1.png')
  }

  create() {

    this.bg = this.add.image(400, 300, 'bg');

    this.player = new Player(this, 0, 0);
    this.merchantShip = new PirateShip(this.physics.world, this);
    //fthis.merchantShip.setScale(3);
    // this.merchantShip.refresh();
    // this.merchantShip.setScale(2);
    this.bg.setDisplaySize(800, 600);

    this.physics.add.collider(this.player, this.merchantShip);
  }

  update() {
    this.player.update();
    this.physics.world.collide(this.player, this.merchantShip);
  }
}
