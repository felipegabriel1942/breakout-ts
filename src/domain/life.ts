import { UiRender } from './ui-render';
import { GameObject } from './game-object';

import config from './../data/config.json';
import { Vector2D } from './vector2D';

export class Life extends GameObject {
  public points: number = config.life.points;
  public render: UiRender = new UiRender();

  private static instance: Life;

  private constructor() {
    super();
  }

  public static getInstance(): Life {
    if (!Life.instance) {
      Life.instance = new Life();
    }

    return Life.instance;
  }

  public draw(): void {
    this.render.text = `Lives: ${this.points}`;
    this.render.position = new Vector2D({ x: this.canvas.width - 65, y: 20 });
    this.render.draw();
  }

  public move(): void {}

  public collide(): void {}

  public hasPoints(): boolean {
    return this.points > 0;
  }
}
