import { WelcomeBackground } from './classes/welcome_background.js';
import { LayerFactory } from './classes/layer_factory.js';

export class Welcome extends Phaser.Scene {
  constructor() {
    super('welcome');

  }

  preload() {
    this.keyA = this.input.keyboard.addKey('A');
    this.keyQ = this.input.keyboard.addKey('Q');
    this.load.baseURL = 'assets/';
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
    this.load.image('ground', 'treasure-hunters/palm-tree-island/Sprites/Terrain/Terrain(32x32).png');
    this.load.image('bg-palm-trees', 'treasure-hunters/palm-tree-island/Sprites/Back Palm Trees/Back Palm Tree Regular 01.png');
    this.load.image('wood-board', 'wood_board.png');
    this.load.image('yellow-paper', 'yellow_paper.png');

    this.load.image('big-clouds', 'treasure-hunters/palm-tree-island/Sprites/Background/Big Clouds.png');
    this.load.image('medium-clouds', 'medium_clouds.png');
    this.load.image('small-cloud', 'treasure-hunters/palm-tree-island/Sprites/Background/Small Cloud 2.png');
    this.load.image('front-palm-trees', 'treasure-hunters/palm-tree-island/Sprites/Front Palm Trees/Front Palm Bottom and Grass (32x32).png')
    this.load.image('front-palm-trees-head', 'treasure-hunters/palm-tree-island/Sprites/Front Palm Trees/Front Palm Tree Top 01.png')
    this.load.image('pirate-flag', 'treasure-hunters/palm-tree-island/Sprites/Objects/Flag/Flag 01.png' )
    this.load.image('platform', 'treasure-hunters/palm-tree-island/Sprites/Objects/Flag/Platform.png' )
    this.load.image('chest', 'treasure-hunters/palm-tree-island/Sprites/Objects/Chest/Chest Open 03.png'),
    this.palmAnims = this.load.atlas('front-palm-trees-anims', 'palm_tree_heads.png' ,'palm_tree_heads.json');
    this.flagAnims = this.load.atlas('pirate-flag-anims', 'pirate_flag.png' ,'pirate_flag.json');

    this.tilemap = this.load.tilemapTiledJSON('welcome', 'treasure-hunters/welcome.json');

    // this.palmTreesTileSet =
  }

  create() {

    this.tilemap = this.make.tilemap({ key: 'welcome'});
    this.layerFactory = new LayerFactory(this.tilemap);
    console.log(this.layerFactory);
    //  Background layer
    this.bg = new WelcomeBackground(this, 'bg')

    // Tilesets

    // The code I'd love to have
    this.groundLayer = this.layerFactory.create('ground');
    this.bgPalmTreesLayer = this.layerFactory.create('bg-palm-trees');

    this.frontPalmTreesTileset = this.tilemap.addTilesetImage('front_palm_grass', 'front-palm-trees' )




    this.woodBoardTileset = this.tilemap.addTilesetImage('wood_board', 'wood-board')
    this.yellowPaperTileset = this.tilemap.addTilesetImage('yellow_paper', 'yellow-paper')
    // Layers



    this.bigClouds = this.add.tileSprite(400, 355, 800, 100, 'big-clouds');
    this.mediumClouds = this.add.tileSprite(400, 400, 800, 864, 'medium-clouds');

    this.woodBoardLayer = this.tilemap.createLayer('wood_board', this.woodBoardTileset, 0, -30);
    this.yellowPaperLayer = this.tilemap.createLayer('yellow_paper', this.yellowPaperTileset, 0, -30);
    this.frontPalmTreesLayer = this.tilemap.createLayer('front_palm_trunks_roots', this.frontPalmTreesTileset, 0, -30);

    this.palmTreeHeads = this.tilemap.createFromObjects('front_palm_tree_heads', { gid: 115,  key: 'front-palm-trees-head' });

    [this.pirateFlag] = this.tilemap.createFromObjects('pirate_flag', { id: 49, key: 'pirate-flag'} );
    [this.platForm] = this.tilemap.createFromObjects('pirate_flag', { id: 50, key: 'platform'  });
    [this.chest] = this.tilemap.createFromObjects('pirate_flag', { id: 51, key: 'chest'  });
    this.pirateFlag.y -= 30;
    this.platForm.y -= 30;
    this.chest.y -= 28;
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

    // palm tree animations

    this.loadPalmTreeAnims();
    this.loadPirateFlagAnims();

    this.palmTreeHeads.forEach((palmTree) => palmTree.play('palmsway'));
    this.pirateFlag.play('pirateflagsway');

    this.subTitleAnimation = this.tweens.add({
        targets: this.subtitle,
        alpha: 0,
        ease: 'Power2',
        duration: 900,
        repeat: -1,
        yoyo: true
      })

    // flag animation and object


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

  loadPalmTreeAnims() {
    // this.anims.create({})
  this.palmSway = this.anims.create({
      key: 'palmsway',
      frames: this.anims.generateFrameNames('front-palm-trees-anims', {
        prefix: 'palm-tree-sway0',
        start: 1,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })
  }

  loadPirateFlagAnims() {
    this.anims.create({
      key: 'pirateflagsway',
      frames: this.anims.generateFrameNames('pirate-flag-anims', {
        prefix: 'pirate-flag0',
        start: 1,
        end: 9
      }),
      frameRate: 4,
      repeat: -1
    })
  }
}
