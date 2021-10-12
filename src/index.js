import Phaser from 'phaser';
import { LoadingScene } from './scenes/loading/loading.js';


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

// window.onresize = () => window.sizeChanged();

const config = {
    title: 'Miguel\'s pirate CV Game',
    type: Phaser.WEBGL,
    backgroundColor: '#351f1b',
    height: 600,
    width: 800,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: 300,
        debug: false,
        },
      },
    render: {
      antialiasGL: false,
      pixelArt: true,
    },
    autoFocus: true,
    audio: {
      disableWebAudio: false,
    },
    parent: 'phaser-example',
    scene: LoadingScene
};

window.game = new Phaser.Game(config);
