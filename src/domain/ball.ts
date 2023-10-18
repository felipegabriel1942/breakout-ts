import { CircleRender } from './circle-render';
import { GameObject } from './game-object';
import { Life } from './life';
import { Paddle } from './paddle';
import { Vector2D } from './vector2D';

import config from '../data/config.json';

export class Ball extends GameObject {
  public position: Vector2D;
  public speed: Vector2D;
  public radius: number = config.ball.radius;
  public render: CircleRender = new CircleRender();

  private static instance: Ball;

  private constructor() {
    super();
    this.position = new Vector2D({
      x: this.canvas.width / 2,
      y: this.canvas.height - 30,
    });

    this.speed = new Vector2D(config.ball.speed);
  }

  public static getInstance(): Ball {
    if (!Ball.instance) {
      Ball.instance = new Ball();
    }

    return Ball.instance;
  }

  public draw(): void {
    this.render.position = this.position;
    this.render.radius = this.radius;
    this.render.draw();
  }

  public move(): void {
    if (this.isBouncingOnHorizontalWall()) {
      this.speed.x = -this.speed.x;
    }

    if (this.isBoucingOnVerticalWall()) {
      this.speed.y = -this.speed.y;
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  public collide(): void {
    const paddle: Paddle = Paddle.getInstance();
    const life: Life = Life.getInstance();

    if (this.position.y + this.speed.y > this.canvas.height - this.radius) {
      if (
        this.position.x > paddle.position.x &&
        this.position.x < paddle.position.x + paddle.width
      ) {
        this.speed.y = -this.speed.y;
      } else {
        life.points--;

        this.position.x = this.canvas.width / 2;
        this.position.y = this.canvas.height - 30;
        this.speed.x = config.ball.speed.x;
        this.speed.y = -config.ball.speed.y;
        paddle.position.x = (this.canvas.width - paddle.width) / 2;
      }
    }
  }

  private isBouncingOnHorizontalWall(): boolean {
    return (
      this.position.x + this.speed.x > this.canvas.width - this.radius ||
      this.position.x + this.speed.x < this.radius
    );
  }

  private isBoucingOnVerticalWall(): boolean {
    return this.position.y + this.speed.y < this.radius;
  }
}
