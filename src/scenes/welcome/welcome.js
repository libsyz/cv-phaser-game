

export class Welcome extends Phaser.Scene {
  constructor() {
    super('welcome');

  }

  preload() {
    this.keyQ = this.input.keyboard.addKey('Q');
    this.load.baseURL = 'assets/';
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
    this.load.image('ground-tiles', 'treasure-hunters/palm-tree-island/Sprites/Terrain/Terrain(32x32).png');

    this.tilemap = this.load.tilemapTiledJSON('welcome', 'treasure-hunters/welcome.json');
    // this.palmTreesTileSet =
  }

  create() {
    this.tilemap = this.make.tilemap({ key: 'welcome'});
    this.tileset = this.tilemap.addTilesetImage('terrain', 'ground-tiles');
    this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
    this.bg.displayWidth = this.sys.canvas.width
    this.bg.displayHeight = this.sys.canvas.height
    this.backgroundLayer = this.tilemap.createLayer('ground', this.tileset, 0, -30 );

  }

  update() {
    if (this.keyQ.isDown) {
      this.scene.start('loading-scene');
    }
  }

  textConfig(color = '000') {
    return {
      fontFamily: 'PressStart',
      color: '000'
    }
  }

}
