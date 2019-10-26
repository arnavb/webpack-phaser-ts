import Phaser from 'phaser';

import { Scene } from './scenes/scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: Scene,
};

export const game = new Phaser.Game(gameConfig);
