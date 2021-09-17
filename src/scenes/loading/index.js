import { Scene } from 'phaser';

export class LoadingScene extends Scene {
  constructor() {
    console.log('initializing this, does it work?')
    super('loading-scene');
  }

  create() {
    console.log('Loading scene was created');
  }
}
