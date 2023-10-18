import { Brick } from './../domain/brick';

import config from '../data/config.json';

export class BrickService {
  private brickRowCount = config.brickRowCount;
  private brickColumnCount = config.brickColumnCount;

  public getBricks(): Brick[] {
    const bricks = [];

    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        const brick = new Brick();
        brick.position.x = c * (brick.width + brick.padding) + brick.offsetLeft;
        brick.position.y = r * (brick.height + brick.padding) + brick.offsetTop;
        bricks.push(brick);
      }
    }

    return bricks;
  }
}
