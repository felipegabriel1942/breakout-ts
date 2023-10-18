import type { GameObject } from '../domain/game-object';
import { State } from './../domain/state';
import { GameStatus } from './../enum/game-status.enum';
import { GameObjectService } from './../service/game-object.service';
import { CanvasUtils } from './../utils/canvas-utils';

import config from '../data/config.json';

export class Game {
  private gameState: State = new State();
  private gameObjects: GameObject[] = [];
  private gameObjectService: GameObjectService = new GameObjectService();

  public constructor() {
    this.gameObjects = this.gameObjectService.getGameObjects();
  }

  public execute(): void {
    if (this.gameState.status === GameStatus.RUNNING) {
      CanvasUtils.clearCanvas();

      this.gameObjects.forEach((obj) => {
        obj.move();
        obj.collide();
        obj.draw();
      });

      requestAnimationFrame(() => this.execute());
    } else {
      this.endGame();
    }
  }

  private endGame(): void {
    alert(this.getEndgameMsg());
    document.location.reload();
  }

  private getEndgameMsg(): string {
    let message = '';

    if (this.gameState.status == GameStatus.LOSE) {
      message = config.message.lose;
    }

    if (this.gameState.status == GameStatus.WON) {
      message = config.message.win;
    }

    return message;
  }
}
