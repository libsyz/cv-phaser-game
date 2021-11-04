import { WelcomeBackground } from './classes/welcome_background.js';
import { LayerFactory } from './classes/layer_factory.js';
import { CloudFactory } from './classes/cloud_factory.js';
import { PalmTreeHeadFactory } from './classes/palm_tree_head_factory';

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
    // Sprite / Layer Factories
    const tilemap = this.make.tilemap({ key: 'welcome'});
    const layerFactory = new LayerFactory(tilemap);
    this.cloudFactory = new CloudFactory(this);

    // Object Factories
    const palmTreeHeadFactory = new PalmTreeHeadFactory(this, tilemap);

    //  Background Image
    new WelcomeBackground(this, 'bg')

    // LayerFactories
    // uses convention over conf to find image, tileset and layer names
    layerFactory.create('ground');
    layerFactory.create('bg-palm-trees');
    layerFactory.create('front-palm-trees');
    layerFactory.create('wood-board');
    layerFactory.create('yellow-paper');

    this.cloudFactory.getBigClouds();
    this.cloudFactory.getMediumClouds();


    // Objects
    // PalmTrees
    palmTreeHeadFactory.generate();

    [this.pirateFlag] = tilemap.createFromObjects('pirate_flag', { id: 49, key: 'pirate-flag'} );
    [this.platForm] = tilemap.createFromObjects('pirate_flag', { id: 50, key: 'platform'  });
    [this.chest] = tilemap.createFromObjects('pirate_flag', { id: 51, key: 'chest'  });
    this.pirateFlag.y -= 30;
    this.platForm.y -= 30;
    this.chest.y -= 28;

    this.title = this.add.text(360 , 234, 'Miguel\'s CV\nPirate Game',
                  this.textConfig());

    this.subtitle = this.add.text(360 , 294, 'Press Start',
                  this.textConfig()).setInteractive();

    // palm tree animations

    // this.loadPalmTreeAnims();
    // this.loadPirateFlagAnims();

    //
    // this.pirateFlag.play('pirateflagsway');

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

    this.cloudFactory.update();
    // this.subTitleAnimation.play();
  }

  textConfig(color = '#000000') {
    return {
              fontFamily: 'PressStart',
              color: color,
              align: 'center',
    }
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
