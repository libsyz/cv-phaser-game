

export class LayerFactory {
  constructor(tilemap) {
    this.tilemap = tilemap;
  }

  create(key) {
    const tileSet = this.tilemap.addTilesetImage(`${key}-tileset`, key);
    const layer = this.tilemap.createLayer(key, tileSet, 0, -30 );
    return layer;
  }
}
