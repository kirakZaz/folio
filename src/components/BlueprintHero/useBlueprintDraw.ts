import { useCallback } from 'react';

import {
  GRID_CLR,
  LINE_CLR,
  DIM_CLR,
  MAGENTA,
  ORANGE,
  TEXT_PRI,
  TEXT_SEC,
} from './blueprintHero.constants';
import type { MouseState, RevealZone } from './blueprintHero.types';

// ─── Easing helpers ───────────────────────────────────────────────────────────
export const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);
export const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

// ─── Hook ─────────────────────────────────────────────────────────────────────
export const useBlueprintDraw = () => {
  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      alpha: number,
      mouse: MouseState,
    ) => {
      if (alpha <= 0) return;

      const gridSize = 32;
      ctx.save();

      for (let x = 0; x <= width; x += gridSize) {
        const boost = mouse.active ? Math.max(0, 1 - Math.abs(x - mouse.x) / 110) * 0.5 : 0;
        ctx.globalAlpha = alpha * (0.5 + boost);
        ctx.strokeStyle = boost > 0.15 ? `rgba(255,47,146,${0.12 + boost * 0.25})` : GRID_CLR;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        const boost = mouse.active ? Math.max(0, 1 - Math.abs(y - mouse.y) / 110) * 0.5 : 0;
        ctx.globalAlpha = alpha * (0.5 + boost);
        ctx.strokeStyle = boost > 0.15 ? `rgba(255,122,24,${0.1 + boost * 0.2})` : GRID_CLR;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          const dist = mouse.active ? Math.hypot(x - mouse.x, y - mouse.y) : 999;
          const boost = mouse.active ? Math.max(0, 1 - dist / 90) * 0.85 : 0;
          ctx.globalAlpha = alpha * (0.2 + boost * 0.7);
          ctx.fillStyle =
            boost > 0.3
              ? (Math.floor(x / gridSize) + Math.floor(y / gridSize)) % 2 === 0
                ? `rgba(255,47,146,${boost * 0.7})`
                : `rgba(255,122,24,${boost * 0.6})`
              : 'rgba(0,0,0,0.2)';
          ctx.beginPath();
          ctx.arc(x, y, 0.8 + boost * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    },
    [],
  );

  const drawConstructionLines = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, progress: number) => {
      if (progress <= 0) return;

      const centerX = width / 2;
      const centerY = height / 2;

      const lines = [
        { x1: 0, y1: centerY, x2: width, y2: centerY, clr: DIM_CLR, lineWidth: 0.5, startTime: 0 },
        {
          x1: centerX,
          y1: 0,
          x2: centerX,
          y2: height,
          clr: DIM_CLR,
          lineWidth: 0.5,
          startTime: 0.05,
        },
        {
          x1: 0,
          y1: 0,
          x2: width,
          y2: height,
          clr: 'rgba(0,0,0,0.04)',
          lineWidth: 0.5,
          startTime: 0.1,
        },
        {
          x1: width,
          y1: 0,
          x2: 0,
          y2: height,
          clr: 'rgba(0,0,0,0.04)',
          lineWidth: 0.5,
          startTime: 0.13,
        },
        {
          x1: width * 0.08,
          y1: height * 0.18,
          x2: width * 0.92,
          y2: height * 0.18,
          clr: DIM_CLR,
          lineWidth: 0.5,
          startTime: 0.16,
        },
        {
          x1: width * 0.08,
          y1: height * 0.82,
          x2: width * 0.92,
          y2: height * 0.82,
          clr: DIM_CLR,
          lineWidth: 0.5,
          startTime: 0.19,
        },
        {
          x1: width * 0.08,
          y1: height * 0.18,
          x2: width * 0.08,
          y2: height * 0.82,
          clr: DIM_CLR,
          lineWidth: 0.5,
          startTime: 0.22,
        },
        {
          x1: width * 0.92,
          y1: height * 0.18,
          x2: width * 0.92,
          y2: height * 0.82,
          clr: DIM_CLR,
          lineWidth: 0.5,
          startTime: 0.25,
        },
        {
          x1: width * 0.08,
          y1: centerY,
          x2: width * 0.92,
          y2: centerY,
          clr: 'rgba(255,47,146,0.2)',
          lineWidth: 0.5,
          startTime: 0.3,
        },
      ];

      ctx.save();
      lines.forEach((line) => {
        const lineProgress = clamp((progress - line.startTime) / 0.35, 0, 1);
        if (lineProgress <= 0) return;

        ctx.globalAlpha = easeOut(lineProgress);
        ctx.strokeStyle = line.clr;
        ctx.lineWidth = line.lineWidth;

        const endX = line.x1 + (line.x2 - line.x1) * easeOut(lineProgress);
        const endY = line.y1 + (line.y2 - line.y1) * easeOut(lineProgress);

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });
      ctx.restore();
    },
    [],
  );

  const drawCircles = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, alpha: number) => {
      if (alpha <= 0) return;

      ctx.save();
      const centerX = width / 2;
      const centerY = height / 2;

      const radiusSets: [number, number[]][] = [
        [Math.min(width, height) * 0.42, [3, 7]],
        [Math.min(width, height) * 0.3, [2, 9]],
        [Math.min(width, height) * 0.18, [1, 11]],
      ];

      radiusSets.forEach(([radius, dash]) => {
        ctx.setLineDash(dash);
        ctx.strokeStyle = 'rgba(0,0,0,0.07)';
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.setLineDash([]);
      ctx.restore();
    },
    [],
  );

  const drawText = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, progress: number) => {
      if (progress <= 0) return;

      ctx.save();

      const fontSize1 = Math.floor(width * 0.148);
      const fontSize2 = Math.floor(width * 0.082);
      const nameY = height * 0.43;
      const subY = height * 0.62;
      const p1 = clamp(progress * 2, 0, 1);
      const p2 = clamp((progress - 0.5) * 2, 0, 1);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // KIRA — clipped reveal
      ctx.font = `700 ${fontSize1}px 'Inter', sans-serif`;
      const kiraWidth = ctx.measureText('KIRA').width;
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        width / 2 - kiraWidth / 2 - 2,
        nameY - fontSize1 * 0.8,
        kiraWidth * easeOut(p1) + 4,
        fontSize1 * 1.6,
      );
      ctx.clip();
      ctx.globalAlpha = easeOut(p1);
      ctx.fillStyle = TEXT_PRI;
      ctx.fillText('KIRA', width / 2, nameY);
      ctx.restore();

      // KIRA ghost stroke
      ctx.save();
      ctx.globalAlpha = easeOut(p1) * 0.05;
      ctx.strokeStyle = MAGENTA;
      ctx.lineWidth = 1;
      ctx.font = `700 ${fontSize1}px 'Inter', sans-serif`;
      ctx.strokeText('KIRA', width / 2 + 2, nameY + 2);
      ctx.restore();

      // ZAKIROV — clipped reveal
      ctx.font = `400 ${fontSize2}px 'Inter', sans-serif`;
      const zakirovWidth = ctx.measureText('ZAKIROV').width;
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        width / 2 - zakirovWidth / 2 - 2,
        subY - fontSize2 * 0.8,
        zakirovWidth * easeOut(p2) + 4,
        fontSize2 * 1.6,
      );
      ctx.clip();
      ctx.globalAlpha = easeOut(p2) * 0.65;
      ctx.fillStyle = TEXT_SEC;
      ctx.fillText('ZAKIROV', width / 2, subY);
      ctx.restore();

      // Underline
      if (p2 > 0.85) {
        const underlineProgress = (p2 - 0.85) / 0.15;
        const underlineY = subY + fontSize2 * 0.72;
        ctx.globalAlpha = underlineProgress * 0.7;
        ctx.strokeStyle = ORANGE;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(width / 2 - zakirovWidth / 2, underlineY);
        ctx.lineTo(width / 2 - zakirovWidth / 2 + zakirovWidth * underlineProgress, underlineY);
        ctx.stroke();
      }

      ctx.restore();
    },
    [],
  );

  const drawAccents = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      alpha: number,
      mouse: MouseState,
    ) => {
      if (alpha <= 0) return;

      ctx.save();

      const accentPoints: [number, number, string][] = [
        [width * 0.08, height * 0.18, MAGENTA],
        [width * 0.92, height * 0.18, ORANGE],
        [width * 0.08, height * 0.82, ORANGE],
        [width * 0.92, height * 0.82, MAGENTA],
        [width / 2, height * 0.18, MAGENTA],
        [width / 2, height * 0.82, ORANGE],
      ];

      accentPoints.forEach(([x, y, color]) => {
        const dist = mouse.active ? Math.hypot(x - mouse.x, y - mouse.y) : 999;
        const pulse = mouse.active ? Math.max(0, 1 - dist / 80) * 2 : 0;
        const size = 3 + pulse * 2.5;

        ctx.globalAlpha = alpha * (0.45 + pulse * 0.5);
        ctx.fillStyle = color;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      });

      ctx.restore();
    },
    [],
  );

  const drawTicks = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, alpha: number) => {
      if (alpha <= 0) return;

      ctx.save();
      ctx.globalAlpha = alpha * 0.3;
      ctx.strokeStyle = LINE_CLR;
      ctx.lineWidth = 0.5;

      const gridSize = 32;
      for (let x = gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 4);
        ctx.stroke();
      }
      for (let y = gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(4, y);
        ctx.stroke();
      }

      ctx.restore();
    },
    [],
  );

  const drawCursor = useCallback((ctx: CanvasRenderingContext2D, mouse: MouseState) => {
    if (!mouse.active) return;

    const { x, y, velocityX, velocityY } = mouse;
    const speed = Math.hypot(velocityX, velocityY);

    ctx.save();

    // Outer ring
    ctx.strokeStyle = MAGENTA;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.arc(x, y, 11 + speed * 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Center dot
    ctx.fillStyle = ORANGE;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Crosshair lines
    const gap = 15;
    const len = 24 + speed;
    ctx.strokeStyle = LINE_CLR;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;
    ctx.setLineDash([2, 4]);

    [
      [x - len, y, x - gap, y],
      [x + gap, y, x + len, y],
      [x, y - len, x, y - gap],
      [x, y + gap, x, y + len],
    ].forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    // Full canvas crosshair
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.globalAlpha = 1;
    ctx.setLineDash([1, 8]);

    [
      [0, y, x - len, y],
      [x + len, y, x, y],
      [x, 0, x, y - len],
      [x, y + len, x, y],
    ].forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    ctx.setLineDash([]);

    // Coordinate label
    ctx.font = '8px "JetBrains Mono", monospace';
    ctx.fillStyle = MAGENTA;
    ctx.globalAlpha = 0.5;
    ctx.fillText(`${Math.round(x)}, ${Math.round(y)}`, x + 16, y - 8);

    ctx.restore();
  }, []);

  const drawTrail = useCallback((ctx: CanvasRenderingContext2D, mouse: MouseState) => {
    if (mouse.trails.length < 2) return;

    ctx.save();
    for (let i = 1; i < mouse.trails.length; i++) {
      const current = mouse.trails[i];
      const previous = mouse.trails[i - 1];
      ctx.globalAlpha = (i / mouse.trails.length) * 0.18;
      ctx.strokeStyle = i % 2 === 0 ? MAGENTA : ORANGE;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(previous.x, previous.y);
      ctx.lineTo(current.x, current.y);
      ctx.stroke();
    }
    ctx.restore();
  }, []);

  const drawPins = useCallback((ctx: CanvasRenderingContext2D, mouse: MouseState) => {
    mouse.pins.forEach((pin) => {
      pin.age = (pin.age || 0) + 0.014;
      const alpha = Math.max(0, 1 - pin.age * 0.07);
      if (alpha <= 0) return;

      ctx.save();

      [pin.age * 22, Math.max(0, pin.age * 22 - 14)].forEach((radius, index) => {
        ctx.strokeStyle = index === 0 ? MAGENTA : ORANGE;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = alpha * (index === 0 ? 0.35 : 0.2);
        ctx.beginPath();
        ctx.arc(pin.x, pin.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.fillStyle = MAGENTA;
      ctx.globalAlpha = alpha * 0.85;
      ctx.beginPath();
      ctx.arc(pin.x, pin.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = TEXT_PRI;
      ctx.globalAlpha = alpha * 0.5;
      ctx.fillText(`[${Math.round(pin.x)}, ${Math.round(pin.y)}]`, pin.x + 8, pin.y - 6);

      ctx.restore();
    });

    mouse.pins = mouse.pins.filter((pin) => (pin.age || 0) < 15);
  }, []);

  const drawMeasureLine = useCallback((ctx: CanvasRenderingContext2D, mouse: MouseState) => {
    if (!mouse.measureStart) return;

    const end = mouse.measureEnd || (mouse.active ? { x: mouse.x, y: mouse.y } : null);
    if (!end || end.x < 0) return;

    const dx = end.x - mouse.measureStart.x;
    const dy = end.y - mouse.measureStart.y;
    const distance = Math.round(Math.hypot(dx, dy));

    ctx.save();

    const gradient = ctx.createLinearGradient(
      mouse.measureStart.x,
      mouse.measureStart.y,
      end.x,
      end.y,
    );
    gradient.addColorStop(0, MAGENTA);
    gradient.addColorStop(1, ORANGE);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.6;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(mouse.measureStart.x, mouse.measureStart.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.setLineDash([]);

    const midX = (mouse.measureStart.x + end.x) / 2;
    const midY = (mouse.measureStart.y + end.y) / 2;
    ctx.font = '9px "JetBrains Mono", monospace';
    const labelWidth = ctx.measureText(`${distance}px`).width;

    ctx.fillStyle = 'rgba(246,247,244,0.9)';
    ctx.globalAlpha = 1;
    ctx.fillRect(midX - labelWidth / 2 - 5, midY - 11, labelWidth + 10, 15);

    ctx.fillStyle = MAGENTA;
    ctx.textAlign = 'center';
    ctx.fillText(`${distance}px`, midX, midY);

    ctx.restore();
  }, []);

  const drawRevealZones = useCallback((ctx: CanvasRenderingContext2D, zones: RevealZone[]) => {
    for (let i = zones.length - 1; i >= 0; i--) {
      const zone = zones[i];
      zone.alpha = Math.max(0, zone.alpha - 0.003);

      if (zone.alpha <= 0) {
        zones.splice(i, 1);
        continue;
      }

      const gradient = ctx.createRadialGradient(zone.x, zone.y, 0, zone.x, zone.y, zone.r);
      gradient.addColorStop(0, `rgba(255,47,146,${zone.alpha * 0.05})`);
      gradient.addColorStop(0.5, `rgba(255,122,24,${zone.alpha * 0.025})`);
      gradient.addColorStop(1, 'rgba(246,247,244,0)');

      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  return {
    drawGrid,
    drawConstructionLines,
    drawCircles,
    drawText,
    drawAccents,
    drawTicks,
    drawCursor,
    drawTrail,
    drawPins,
    drawMeasureLine,
    drawRevealZones,
  };
};
