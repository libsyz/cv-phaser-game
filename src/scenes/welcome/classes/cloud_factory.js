

export class CloudFactory {
  constructor(scene) {
    this.scene = scene
  }


  getBigClouds() {
    this.bigClouds = this.scene.add.tileSprite(400, 355, 800, 100, 'big-clouds');

  }

  getMediumClouds() {
    this.mediumClouds = this.scene.add.tileSprite(400, 400, 800, 864, 'medium-clouds');
  }

  update() {
    if (this.bigClouds) {
      this.bigClouds.tilePositionX += 0.25;
    }

    if (this.mediumClouds) {
      this.mediumClouds.tilePositionX += 0.35;
    }
  }

}
