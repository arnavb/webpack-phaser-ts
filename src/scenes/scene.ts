import * as Phaser from 'phaser';

export class Scene extends Phaser.Scene {
  preload(): void {
    this.load.image('pizza', 'assets/pizza.png');
  }
  create(): void {
    this.add.sprite(300, 200, 'pizza');
  }
}
