

export class WelcomeBackground {
  constructor(scene, imageKey) {
    this.bg = scene.add.image(scene.cameras.main.width / 2, scene.cameras.main.height / 2, imageKey);
    this.bg.displayWidth = scene.sys.canvas.width;
    this.bg.displayHeight = scene.sys.canvas.height;
  }

}
