import { useCallback, useRef } from 'react';
import type { MouseState, RevealZone } from './blueprintHero.types';

const TRAIL_MAX_LENGTH = 22;
const REVEAL_ZONE_MAX = 40;
const REVEAL_ZONE_SPAWN_CHANCE = 0.28;
const REVEAL_ZONE_RADIUS = 60;
const MEASURE_RESET_DELAY_MS = 3500;

interface UseBlueprintMouseOptions {
  stageRef: React.RefObject<HTMLDivElement>;
  mouseRef: React.MutableRefObject<MouseState>;
  revealedZonesRef: React.MutableRefObject<RevealZone[]>;
  onFirstMove: () => void;
}

export const useBlueprintMouse = ({
  stageRef,
  mouseRef,
  revealedZonesRef,
  onFirstMove,
}: UseBlueprintMouseOptions) => {
  const hintHiddenRef = useRef(false);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      const mouse = mouseRef.current;

      mouse.velocityX = nextX - mouse.x;
      mouse.velocityY = nextY - mouse.y;
      mouse.x = nextX;
      mouse.y = nextY;
      mouse.active = true;

      mouse.trails.push({ x: nextX, y: nextY });
      if (mouse.trails.length > TRAIL_MAX_LENGTH) mouse.trails.shift();

      if (Math.random() < REVEAL_ZONE_SPAWN_CHANCE) {
        revealedZonesRef.current.push({ x: nextX, y: nextY, r: REVEAL_ZONE_RADIUS, alpha: 1 });
        if (revealedZonesRef.current.length > REVEAL_ZONE_MAX) {
          revealedZonesRef.current.shift();
        }
      }

      if (!hintHiddenRef.current) {
        hintHiddenRef.current = true;
        onFirstMove();
      }
    },
    [stageRef, mouseRef, revealedZonesRef, onFirstMove],
  );

  const handleMouseLeave = useCallback(() => {
    const mouse = mouseRef.current;
    mouse.active = false;
    mouse.x = -1;
    mouse.y = -1;
    mouse.trails = [];
    mouse.velocityX = 0;
    mouse.velocityY = 0;
  }, [mouseRef]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-replay]')) return;

      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      const mouse = mouseRef.current;

      if (!mouse.measureStart) {
        mouse.measureStart = { x: clickX, y: clickY };
        mouse.measureEnd = null;
        mouse.pins.push({ x: clickX, y: clickY, age: 0 });
      } else {
        mouse.measureEnd = { x: clickX, y: clickY };
        mouse.pins.push({ x: clickX, y: clickY, age: 0 });
        setTimeout(() => {
          mouse.measureStart = null;
          mouse.measureEnd = null;
        }, MEASURE_RESET_DELAY_MS);
      }
    },
    [stageRef, mouseRef],
  );

  return { handleMouseMove, handleMouseLeave, handleClick };
};
