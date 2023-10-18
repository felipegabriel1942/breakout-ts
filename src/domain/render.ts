import { Vector2D } from './vector2D';
export abstract class Render {
  public position: Vector2D = new Vector2D({ x: 0, y: 0 });
  public width!: number;
  public height!: number;
  public color: string = '#0095DD';

  public abstract draw(): void;
}
