import { Physics } from "phaser";

export class PirateShip extends Physics.Arcade.StaticGroup {
  constructor(world, scene) {
    super(world, scene);
    this.shipHull = this.create(100, 300, 'ship-hull').setScale(2);
    this.flag = this.create(100,300, 'ship-flag');
    // super(scene, x, y, 'ship-hull');
    // scene.add.existing(this);
    // scene.physics.add.existing(this);
    // this.body.setCollideWorldBounds(true);
    //this.body.setImmovable(true);
    //scene.add.existing(this);
    // this.group = scene.physics.add.staticGroup();
    // this.hull = this.group.create(50, 300, 'ship-hull');
    // this.hull.setScale(2);
    // this.hull.body.velocity.x = 300;
  }
}
