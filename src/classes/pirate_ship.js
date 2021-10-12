import { Physics } from "phaser";

export class PirateShip {
  constructor(scene, x, y) {
    //super(scene, x, y, 'ship-hull');

    //scene.add.existing(this);
    this.group = scene.physics.add.staticGroup();
    this.hull = this.group.create(50, 300, 'ship-hull');
    this.hull.setScale(2);
    this.hull.body.velocity.x = 300;
  }
}
