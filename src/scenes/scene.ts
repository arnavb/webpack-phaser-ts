export class Scene extends Phaser.Scene {
  create(): void {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}
