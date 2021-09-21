import { Scene } from 'phaser';
import { Player } from '../../classes/player.js';

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
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
  }

  create() {
    console.log('Loading scene was created');
    this.bg = this.add.image(400, 300, 'bg');
    // this.pirate = this.add.sprite(200, 200, 'pirate')
    this.player = new Player(this, 100, 100);

    this.player.setScale(2);
    this.bg.setDisplaySize(800, 600);

  }

  update() {
    this.player.update();
  }
}
