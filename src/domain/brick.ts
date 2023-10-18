import { Vector2D } from './vector2D';
import { Score } from './score';
import { GameObject } from './game-object';
import { Ball } from './ball';
import { BrickStatus } from './../enum/brick-status.enum';
import { RectangleRender } from './rectangle-render';

import config from '../data/config.json';

export class Brick extends GameObject {
  public position: Vector2D;
  public width: number = config.brick.width;
  public height: number = config.brick.height;
  public padding: number = config.brick.padding;
  public offsetTop: number = config.brick.offsetTop;
  public offsetLeft: number = config.brick.offsetLeft;
  public render: RectangleRender = new RectangleRender();
  public status: BrickStatus = BrickStatus.ALIVE;

  public constructor() {
    super();

    this.position = new Vector2D(config.brick.position);
  }

  public draw(): void {
    if (this.status === BrickStatus.ALIVE) {
      this.render.position = this.position;
      this.render.height = this.height;
      this.render.width = this.width;
      this.render.draw();
    }
  }

  public move(): void {}

  public collide(): void {
    if (this.status === BrickStatus.ALIVE) {
      const ball = Ball.getInstance();
      const score = Score.getInstance();

      if (
        ball.position.x > this.position.x &&
        ball.position.x < this.position.x + this.width &&
        ball.position.y > this.position.y &&
        ball.position.y < this.position.y + this.height
      ) {
        ball.speed.y = -ball.speed.y;
        score.points++;
        this.status = BrickStatus.DEAD;
      }
    }
  }
}
