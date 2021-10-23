

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
    this.yellowPaperTileset = this.tilemap.addTilesetImage('yellow_paper', 'yellow-paper')

    // Layers
    this.backgroundLayer = this.tilemap.createLayer('ground', this.groundTileset, 0, -30 );
    this.palmTressLayer = this.tilemap.createLayer('background_palm_trees', this.palmTreesTileset, 0, -30);

    this.bigClouds = this.add.tileSprite(400, 355, 800, 100, 'big-clouds');
    this.mediumClouds = this.add.tileSprite(400, 400, 800, 864, 'medium-clouds');

    this.woodBoardLayer = this.tilemap.createLayer('wood_board', this.woodBoardTileset, 0, -30);
    this.yellowPaperLayer = this.tilemap.createLayer('yellow_paper', this.yellowPaperTileset, 0, -30);

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
  }

  textConfig(color = '000') {
    return {
      fontFamily: 'PressStart',
      color: '000'
    }
  }

}
