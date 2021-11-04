

export class PalmTreeHeadFactory {
  constructor(scene, tilemap) {
    this.scene = scene;
    this.tilemap = tilemap;
  }

  generate() {
    const heads = this.tilemap.createFromObjects('front_palm_tree_heads', { gid: 115,  key: 'front-palm-trees-head' });
    this.loadAnims();
    heads.forEach((palmHead) => palmHead.play('palmsway'));
  }

  loadAnims() {
    // this.anims.create({})
  this.palmSway = this.scene.anims.create({
      key: 'palmsway',
      frames: this.scene.anims.generateFrameNames('front-palm-trees-anims', {
        prefix: 'palm-tree-sway0',
        start: 1,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })
  }
}
