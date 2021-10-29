

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
    this.load.image('wood-board', 'wood_board.png');
    this.load.image('yellow-paper', 'yellow_paper.png');

    this.load.image('big-clouds', 'treasure-hunters/palm-tree-island/Sprites/Background/Big Clouds.png');
    this.load.image('medium-clouds', 'medium_clouds.png');
    this.load.image('small-cloud', 'treasure-hunters/palm-tree-island/Sprites/Background/Small Cloud 2.png');
    this.load.image('front-palm-trees', 'treasure-hunters/palm-tree-island/Sprites/Front Palm Trees/Front Palm Bottom and Grass (32x32).png')
    this.load.image('front-palm-trees-head', 'treasure-hunters/palm-tree-island/Sprites/Front Palm Trees/Front Palm Tree Top 01.png')

    this.palmAnims = this.load.atlas('front-palm-trees-anims', 'palm_tree_heads.png' ,'palm_tree_heads.json');


    this.tilemap = this.load.tilemapTiledJSON('welcome', 'treasure-hunters/welcome.json');
    // this.palmTreesTileSet =
  }

  create() {
    this.tilemap = this.make.tilemap({ key: 'welcome'});

    //  Background layer
    this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
    this.bg.displayWidth = this.sys.canvas.width
    this.bg.displayHeight = this.sys.canvas.height

    // Tilesets
    this.groundTileset = this.tilemap.addTilesetImage('terrain', 'ground-tiles');
    this.palmTreesTileset = this.tilemap.addTilesetImage('background_palm_tree', 'bg-palm-trees')
    this.woodBoardTileset = this.tilemap.addTilesetImage('wood_board', 'wood-board')
    // this.yellowPaperTileset = this.tilemap.addTilesetImage('yellow_paper', 'yellow-paper')
    this.frontPalmTreesTileset = this.tilemap.addTilesetImage('front_palm_grass', 'front-palm-trees' )
    // Layers
    this.backgroundLayer = this.tilemap.createLayer('ground', this.groundTileset, 0, -30 );
    this.palmTressLayer = this.tilemap.createLayer('background_palm_trees', this.palmTreesTileset, 0, -30);

    this.bigClouds = this.add.tileSprite(400, 355, 800, 100, 'big-clouds');
    this.mediumClouds = this.add.tileSprite(400, 400, 800, 864, 'medium-clouds');

    this.woodBoardLayer = this.tilemap.createLayer('wood_board', this.woodBoardTileset, 0, -30);
    // this.yellowPaperLayer = this.tilemap.createLayer('yellow_paper', this.yellowPaperTileset, 0, -30);
    this.frontPalmTreesLayer = this.tilemap.createLayer('front_palm_trunks_roots', this.frontPalmTreesTileset, 0, -30);

    this.palmTreeHeads = this.tilemap.createFromObjects('front_palm_tree_heads', { gid: 115,  key: 'front-palm-trees-head' })
    // Clouds
    // Text
    this.title = this.add.text(360 , 234, 'Miguel\'s CV\nPirate Game',
                  {
                    fontFamily: 'PressStart',
                    color: '#000000',
                    align: 'center',
                  });

    this.subtitle = this.add.text(360 , 294, 'Press Start',
                  {
                    fontFamily: 'PressStart',
                    color: '#000000',
                    align: 'center',
                  }).setInteractive();


    this.loadPalmTreeAnims();

    this.subTitleAnimation = this.tweens.add({
        targets: this.subtitle,
        alpha: 0,
        ease: 'Power2',
        duration: 900,
        repeat: -1,
        yoyo: true
      })


  }

  update() {

    if (this.keyQ.isDown) {
      this.scene.start('loading-scene');
    }

    this.bigClouds.tilePositionX += 0.25;
    this.mediumClouds.tilePositionX += 0.35;
    this.subTitleAnimation.play();

    if (!this.anims.isPlaying) {
      this.anims.play('palmsway');
    }
  }

  textConfig(color = '000') {
    return {
      fontFamily: 'PressStart',
      color: '000'
    }
  }

  loadPalmTreeAnims() {
    // this.anims.create({})
  this.anims.create({
      key: 'palmsway',
      frames: this.anims.gen  ('front-palm-trees-anims', {
        prefix: 'palm-tree  -sway-',
        start: 1,
        end: 4
      }),
      frameRate: 4,
      yoyo: true,
      repeat: -1
    })
  }
}
