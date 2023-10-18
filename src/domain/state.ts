import { Score } from './score';
import { Life } from './life';

import { GameStatus } from './../enum/game-status.enum';

import config from '../data/config.json';

export class State {
  private _status: GameStatus = GameStatus.RUNNING;

  public constructor() {}

  public get status(): GameStatus {
    const life = Life.getInstance();
    const score = Score.getInstance();

    if (!life.hasPoints()) {
      this._status = GameStatus.LOSE;
    }

    if (score.points == config.brickColumnCount * config.brickRowCount) {
      this._status = GameStatus.WON;
    }

    return this._status;
  }
}
