import type { GameObject } from './../domain/game-object';
import { Paddle } from './../domain/paddle';
import { Score } from './../domain/score';
import { Ball } from './../domain/ball';
import { Life } from './../domain/life';

import { BrickService } from './brick.service';

export class GameObjectService {
  private life: Life = Life.getInstance();
  private ball: Ball = Ball.getInstance();
  private score: Score = Score.getInstance();
  private paddle: Paddle = Paddle.getInstance();
  private brickService: BrickService = new BrickService();

  constructor() {}

  public getGameObjects(): GameObject[] {
    const bricks = this.brickService.getBricks();
    return [this.ball, this.paddle, this.score, this.life, ...bricks];
  }
}
