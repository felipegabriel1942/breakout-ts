import { RectangleRender } from './rectangle-render';
import { Vector2D } from './vector2D';
import { Control } from './control';
import { GameObject } from './game-object';

import config from '../data/config.json';

export class Paddle extends GameObject {
  public position: Vector2D;
  public speed: Vector2D;
  public height: number = config.paddle.height;
  public width: number = config.paddle.width;
  public render: RectangleRender = new RectangleRender();

  private static instance: Paddle;

  private constructor() {
    super();
    this.position = new Vector2D({
      x: (this.canvas.width - this.width) / 2,
      y: this.canvas.height - this.height,
    });
    this.speed = new Vector2D(config.paddle.speed);
  }

  public static getInstance(): Paddle {
    if (!Paddle.instance) {
      Paddle.instance = new Paddle();
    }

    return Paddle.instance;
  }

  public draw(): void {
    this.render.position = this.position;
    this.render.height = this.height;
    this.render.width = this.width;
    this.render.draw();
  }

  public move(): void {
    const control = Control.getInstance();

    if (control.right) {
      this.position.x += this.speed.x;

      if (this.position.x + this.width > this.canvas.width) {
        this.position.x = this.canvas.width - this.width;
      }
    } else if (control.left) {
      this.position.x -= this.speed.x;

      if (this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }

  public collide(): void {}
}
