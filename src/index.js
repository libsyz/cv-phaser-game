import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import { LoadingScene } from './scenes/loading/index.js';


window.sizeChanged = () => {
  if (window.game.isBooted) {
    setTimeout(() => {
      window.game.scale.resize(window.innerWidth, window.innerHeight);

      window.game.canvas.setAttribute(
        'style',
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
      );
    }, 100);
  }
};

window.onresize = () => window.sizeChanged();

const config = {
    title: 'Miguel\'s pirate CV Game',
    type: Phaser.WEBGL,
    backgroundColor: '#351f1b',
    scale: {
      mode: Phaser.Scale.ScaleModes.NONE,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        },
      },
    render: {
      antialiasGL: false,
      pixelArt: true,
    },
    callbacks: {
      postBoot: () => {
        window.sizeChanged();
      },
    },
    canvasStyle: `display: block; width: 100%; height: 100%;`,
    autoFocus: true,
    audio: {
      disableWebAudio: false,
    },
    parent: 'phaser-example',
    scene: LoadingScene
};

window.game = new Phaser.Game(config);
