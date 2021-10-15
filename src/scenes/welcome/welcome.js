

export class Welcome extends Phaser.Scene {
  constructor() {
    super('welcome');
  }

  preload() {
    this.load.baseURL = 'assets/';
    this.load.image('bg', 'treasure-hunters/palm-tree-island/Sprites/Background/BG Image.png');
  }

  create() {
    this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
    this.bg.displayWidth = this.sys.canvas.width
    this.bg.displayHeight = this.sys.canvas.height

    this.add.text(20, 20, "Welcome to Miguel's Pirate CV Game", this.textConfig());
    this.add.text(20, 40, "Press space to continue", this.textConfig());
    this.add.text(20, 60, "Press D to download the CV Directly", this.textConfig());
  }

  textConfig(color = '000') {
    return {
      fontFamily: 'PressStart',
      color: '000'
    }
  }

}
