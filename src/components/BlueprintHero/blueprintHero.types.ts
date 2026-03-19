export interface MouseState {
  x: number;
  y: number;
  active: boolean;
  velocityX: number;
  velocityY: number;
  trails: Array<{ x: number; y: number }>;
  pins: Array<{ x: number; y: number; age: number }>;
  measureStart: { x: number; y: number } | null;
  measureEnd: { x: number; y: number } | null;
}

export interface RevealZone {
  x: number;
  y: number;
  r: number;
  alpha: number;
}
