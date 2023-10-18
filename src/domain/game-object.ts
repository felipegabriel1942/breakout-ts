import { CanvasUtils } from './../utils/canvas-utils';

export abstract class GameObject {
  public ctx: CanvasRenderingContext2D = CanvasUtils.getContext();
  public canvas: HTMLCanvasElement = CanvasUtils.getCanvas();

  public abstract draw(): void;

  public abstract move(): void;

  public abstract collide(): void;
}
