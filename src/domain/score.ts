import { UiRender } from './ui-render';
import { GameObject } from './game-object';
import { Vector2D } from './vector2D';

export class Score extends GameObject {
  public points: number = 0;
  public render: UiRender = new UiRender();

  private static instance: Score;

  private constructor() {
    super();
  }

  public static getInstance(): Score {
    if (!Score.instance) {
      Score.instance = new Score();
    }

    return Score.instance;
  }

  public draw(): void {
    this.render.text = `Score: ${this.points}`;
    this.render.position = new Vector2D({x: 8, y: 20});
    this.render.draw();
  }

  public move(): void {}

  public collide(): void {}
}
