import { Physics } from 'phaser';

export class Player extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'pirate')

    this.keyW = this.scene.input.keyboard.addKey('W');
    this.keyA = this.scene.input.keyboard.addKey('A');
    this.keyS = this.scene.input.keyboard.addKey('S');
    this.keyD = this.scene.input.keyboard.addKey('D');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCollideWorldBounds(true);
  }

  update() {
    this.body.setVelocity(0);

    if (this.keyW?.isDown) {
      this.body.velocity.y = -110;
    }

    if (this.keyA?.isDown) {
      this.body.velocity.x = -110;
      this.body.setOffset(48, 15);
    }

    if (this.keyS?.isDown) {
      this.body.velocity.y = 110;
    }

    if (this.keyD?.isDown) {
      this.body.velocity.x = 110;
      this.body.setOffset(15, 15);
    }
  }


}
