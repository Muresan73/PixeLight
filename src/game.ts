import 'phaser';
import Demo from './demo-scene';

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 600,
  scene: Demo
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const game = new Phaser.Game(config);
