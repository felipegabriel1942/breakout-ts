import { CanvasUtils } from './../utils/canvas-utils';
import { Render } from './render';

export class UiRender extends Render {
  public text!: string;

  public draw(): void {
    const ctx = CanvasUtils.getContext();
    ctx.font = '16px Arial';
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
}
