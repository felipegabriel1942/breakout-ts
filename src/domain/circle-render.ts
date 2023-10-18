import { Render } from './render';
import { CanvasUtils } from './../utils/canvas-utils';

export class CircleRender extends Render {
  public radius!: number;

  constructor() {
    super();
  }

  public draw(): void {
    const ctx = CanvasUtils.getContext();

    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
