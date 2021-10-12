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
  }

  create() {

    this.bg = this.add.image(400, 300, 'bg');

    // this.pirate = this.add.sprite(200, 200, 'pirate');
    // dthis.merchantShipSprite = this.add.sprite(600, 600, 'ship-hull');
    this.player = new Player(this, 0, 0);
    this.merchantShip = new PirateShip(this, 150, 400);
    //fthis.merchantShip.setScale(3);
    this.player.setScale(2);
    this.bg.setDisplaySize(800, 600);

    this.physics.add.collider(this.player, this.merchantShip.group);
  }

  update() {
    this.player.update();
  }
}
