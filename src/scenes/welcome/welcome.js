

export class Welcome extends Phaser.Scene {
  constructor() {
    super('welcome');

  }

  preload() {
    this.keyQ = this.input.keyboard.addKey('Q');
    this.load.baseURL = 'assets/';
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
    this.load.image('ground-tiles', 'treasure-hunters/palm-tree-island/Sprites/Terrain/Terrain(32x32).png');
    this.load.image('bg-palm-trees', 'treasure-hunters/palm-tree-island/Sprites/Back Palm Trees/Back Palm Tree Regular 01.png');
    this.load.image('wood-board', 'wood_board.png')
    this.tilemap = this.load.tilemapTiledJSON('welcome', 'treasure-hunters/welcome.json');
    // this.palmTreesTileSet =
  }

  create() {
    this.tilemap = this.make.tilemap({ key: 'welcome'});

    this.groundTileset = this.tilemap.addTilesetImage('terrain', 'ground-tiles');
    this.palmTreesTileset = this.tilemap.addTilesetImage('background_palm_tree', 'bg-palm-trees')
    this.woodBoardTileset = this.tilemap.addTilesetImage('wood_board', 'wood-board')

    this.backgroundLayer = this.tilemap.createLayer('ground', this.groundTileset, 0, -30 );
    this.palmTressLayer = this.tilemap.createLayer('background_palm_trees', this.palmTreesTileset, 0, -30);
    this.woodBoardLayer = this.tilemap.createLayer('green_board', this.woodBoardTileset, 0, -30);



    // this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
    // this.bg.displayWidth = this.sys.canvas.width
    // this.bg.displayHeight = this.sys.canvas.height


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
