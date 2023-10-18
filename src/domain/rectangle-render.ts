import { CanvasUtils } from './../utils/canvas-utils';
import { Render } from './render';

export class RectangleRender extends Render {
  public draw(): void {
    const ctx = CanvasUtils.getContext();

    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
