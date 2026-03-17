import { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Button } from '@mui/material';

// ─── Constants ────────────────────────────────────────────────────────────────
const BG = '#F6F7F4';
const GRID_CLR = 'rgba(0,0,0,0.055)';
const LINE_CLR = 'rgba(0,0,0,0.18)';
const DIM_CLR = 'rgba(0,0,0,0.1)';
const MAGENTA = '#FF2F92';
const ORANGE = '#FF7A18';
const TEXT_PRI = '#141414';
const TEXT_SEC = '#4E5451';

const INTRO_DURATION = 4500;

// ─── Types ─────────────────────────────────────────────────────────────────────
interface MouseState {
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

interface RevealZone {
  x: number;
  y: number;
  r: number;
  alpha: number;
}

// ─── Easing helpers ────────────────────────────────────────────────────────────
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

// ─── Component ─────────────────────────────────────────────────────────────────
const BlueprintHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const animIdRef = useRef<number>(0);
  const animStartRef = useRef<number | null>(null);
  const animCompleteRef = useRef(false);
  const hintHiddenRef = useRef(false);

  const mouseRef = useRef<MouseState>({
    x: -1,
    y: -1,
    active: false,
    velocityX: 0,
    velocityY: 0,
    trails: [],
    pins: [],
    measureStart: null,
    measureEnd: null,
  });
  const revealedZonesRef = useRef<RevealZone[]>([]);

  const [uiVisible, setUiVisible] = useState(false);
  const [replayVisible, setReplayVisible] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  // ─── Draw functions ───────────────────────────────────────────────────────────
  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, alpha: number, mouse: MouseState) => {
      if (alpha <= 0) return;
      const gridSize = 32;
      ctx.save();
      for (let x = 0; x <= W; x += gridSize) {
        const boost = mouse.active ? Math.max(0, 1 - Math.abs(x - mouse.x) / 110) * 0.5 : 0;
        ctx.globalAlpha = alpha * (0.5 + boost);
        ctx.strokeStyle = boost > 0.15 ? `rgba(255,47,146,${0.12 + boost * 0.25})` : GRID_CLR;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += gridSize) {
        const boost = mouse.active ? Math.max(0, 1 - Math.abs(y - mouse.y) / 110) * 0.5 : 0;
        ctx.globalAlpha = alpha * (0.5 + boost);
        ctx.strokeStyle = boost > 0.15 ? `rgba(255,122,24,${0.1 + boost * 0.2})` : GRID_CLR;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      for (let x = 0; x <= W; x += gridSize) {
        for (let y = 0; y <= H; y += gridSize) {
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
    (ctx: CanvasRenderingContext2D, W: number, H: number, progress: number) => {
      if (progress <= 0) return;
      const cx = W / 2;
      const cy = H / 2;
      const lines = [
        { x1: 0, y1: cy, x2: W, y2: cy, clr: DIM_CLR, w: 0.5, t: 0 },
        { x1: cx, y1: 0, x2: cx, y2: H, clr: DIM_CLR, w: 0.5, t: 0.05 },
        { x1: 0, y1: 0, x2: W, y2: H, clr: 'rgba(0,0,0,0.04)', w: 0.5, t: 0.1 },
        { x1: W, y1: 0, x2: 0, y2: H, clr: 'rgba(0,0,0,0.04)', w: 0.5, t: 0.13 },
        { x1: W * 0.08, y1: H * 0.18, x2: W * 0.92, y2: H * 0.18, clr: DIM_CLR, w: 0.5, t: 0.16 },
        { x1: W * 0.08, y1: H * 0.82, x2: W * 0.92, y2: H * 0.82, clr: DIM_CLR, w: 0.5, t: 0.19 },
        { x1: W * 0.08, y1: H * 0.18, x2: W * 0.08, y2: H * 0.82, clr: DIM_CLR, w: 0.5, t: 0.22 },
        { x1: W * 0.92, y1: H * 0.18, x2: W * 0.92, y2: H * 0.82, clr: DIM_CLR, w: 0.5, t: 0.25 },
        { x1: W * 0.08, y1: cy, x2: W * 0.92, y2: cy, clr: 'rgba(255,47,146,0.2)', w: 0.5, t: 0.3 },
      ];
      ctx.save();
      lines.forEach((line) => {
        const lineProgress = clamp((progress - line.t) / 0.35, 0, 1);
        if (lineProgress <= 0) return;
        ctx.globalAlpha = easeOut(lineProgress);
        ctx.strokeStyle = line.clr;
        ctx.lineWidth = line.w;
        const ex = line.x1 + (line.x2 - line.x1) * easeOut(lineProgress);
        const ey = line.y1 + (line.y2 - line.y1) * easeOut(lineProgress);
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      });
      ctx.restore();
    },
    [],
  );

  const drawCircles = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, alpha: number) => {
      if (alpha <= 0) return;
      ctx.save();
      const cx = W / 2;
      const cy = H / 2;
      const radiusSets: [number, number[]][] = [
        [Math.min(W, H) * 0.42, [3, 7]],
        [Math.min(W, H) * 0.3, [2, 9]],
        [Math.min(W, H) * 0.18, [1, 11]],
      ];
      radiusSets.forEach(([radius, dash]) => {
        ctx.setLineDash(dash);
        ctx.strokeStyle = 'rgba(0,0,0,0.07)';
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      ctx.restore();
    },
    [],
  );

  const drawText = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, progress: number) => {
      if (progress <= 0) return;
      ctx.save();
      const fontSize1 = Math.floor(W * 0.148);
      const fontSize2 = Math.floor(W * 0.082);
      const nameY = H * 0.43;
      const subY = H * 0.62;
      const p1 = clamp(progress * 2, 0, 1);
      const p2 = clamp((progress - 0.5) * 2, 0, 1);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // KIRA
      ctx.font = `700 ${fontSize1}px 'Inter', sans-serif`;
      const width1 = ctx.measureText('KIRA').width;
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        W / 2 - width1 / 2 - 2,
        nameY - fontSize1 * 0.8,
        width1 * easeOut(p1) + 4,
        fontSize1 * 1.6,
      );
      ctx.clip();
      ctx.globalAlpha = easeOut(p1);
      ctx.fillStyle = TEXT_PRI;
      ctx.fillText('KIRA', W / 2, nameY);
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = easeOut(p1) * 0.05;
      ctx.strokeStyle = MAGENTA;
      ctx.lineWidth = 1;
      ctx.font = `700 ${fontSize1}px 'Inter', sans-serif`;
      ctx.strokeText('KIRA', W / 2 + 2, nameY + 2);
      ctx.restore();

      // ZAKIROV
      ctx.font = `400 ${fontSize2}px 'Inter', sans-serif`;
      const width2 = ctx.measureText('ZAKIROV').width;
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        W / 2 - width2 / 2 - 2,
        subY - fontSize2 * 0.8,
        width2 * easeOut(p2) + 4,
        fontSize2 * 1.6,
      );
      ctx.clip();
      ctx.globalAlpha = easeOut(p2) * 0.65;
      ctx.fillStyle = TEXT_SEC;
      ctx.fillText('ZAKIROV', W / 2, subY);
      ctx.restore();

      if (p2 > 0.85) {
        const underlineProgress = (p2 - 0.85) / 0.15;
        ctx.globalAlpha = underlineProgress * 0.7;
        ctx.strokeStyle = ORANGE;
        ctx.lineWidth = 1.5;
        const underlineY = subY + fontSize2 * 0.72;
        ctx.beginPath();
        ctx.moveTo(W / 2 - width2 / 2, underlineY);
        ctx.lineTo(W / 2 - width2 / 2 + width2 * underlineProgress, underlineY);
        ctx.stroke();
      }
      ctx.restore();
    },
    [],
  );

  const drawAccents = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, alpha: number, mouse: MouseState) => {
      if (alpha <= 0) return;
      ctx.save();
      const accentPoints: [number, number, string][] = [
        [W * 0.08, H * 0.18, MAGENTA],
        [W * 0.92, H * 0.18, ORANGE],
        [W * 0.08, H * 0.82, ORANGE],
        [W * 0.92, H * 0.82, MAGENTA],
        [W / 2, H * 0.18, MAGENTA],
        [W / 2, H * 0.82, ORANGE],
      ];
      accentPoints.forEach(([x, y, color]) => {
        const dist = mouse.active ? Math.hypot(x - mouse.x, y - mouse.y) : 999;
        const pulse = mouse.active ? Math.max(0, 1 - dist / 80) * 2 : 0;
        ctx.globalAlpha = alpha * (0.45 + pulse * 0.5);
        ctx.fillStyle = color;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        const size = 3 + pulse * 2.5;
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      });
      ctx.restore();
    },
    [],
  );

  const drawTicks = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, alpha: number) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha * 0.3;
      ctx.strokeStyle = LINE_CLR;
      ctx.lineWidth = 0.5;
      const gridSize = 32;
      for (let x = gridSize; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 4);
        ctx.stroke();
      }
      for (let y = gridSize; y < H; y += gridSize) {
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
    ctx.strokeStyle = MAGENTA;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.arc(x, y, 11 + speed * 0.4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = ORANGE;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    const gap = 15;
    const len = 24 + speed;
    ctx.strokeStyle = LINE_CLR;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;
    ctx.setLineDash([2, 4]);
    ctx.beginPath();
    ctx.moveTo(x - len, y);
    ctx.lineTo(x - gap, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + gap, y);
    ctx.lineTo(x + len, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y - len);
    ctx.lineTo(x, y - gap);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y + gap);
    ctx.lineTo(x, y + len);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.globalAlpha = 1;
    ctx.setLineDash([1, 8]);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x - len, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + len, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y - len);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y + len);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.setLineDash([]);
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

  // ─── Animation loop ───────────────────────────────────────────────────────────
  const startAnimation = useCallback(() => {
    animStartRef.current = null;
    animCompleteRef.current = false;
    setUiVisible(false);
    setReplayVisible(false);
    const mouse = mouseRef.current;
    mouse.measureStart = null;
    mouse.measureEnd = null;
    mouse.pins = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const loop = (timestamp: number) => {
      if (!animStartRef.current) animStartRef.current = timestamp;
      const elapsed = timestamp - animStartRef.current;
      const rawProgress = Math.min(elapsed / INTRO_DURATION, 1);

      const gridAlpha = easeOut(clamp(rawProgress / 0.2, 0, 1));
      const linesProgress = clamp((rawProgress - 0.15) / 0.4, 0, 1);
      const circAlpha = easeOut(clamp((rawProgress - 0.45) / 0.18, 0, 1));
      const textProgress = clamp((rawProgress - 0.5) / 0.35, 0, 1);
      const accentAlpha = easeOut(clamp((rawProgress - 0.75) / 0.15, 0, 1));

      if (rawProgress >= 0.85 && !animCompleteRef.current) {
        animCompleteRef.current = true;
        setUiVisible(true);
        setReplayVisible(true);
      }

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      const mouse = mouseRef.current;
      const zones = revealedZonesRef.current;

      drawRevealZones(ctx, zones);
      drawGrid(ctx, W, H, gridAlpha, mouse);
      drawTicks(ctx, W, H, gridAlpha);
      drawCircles(ctx, W, H, circAlpha * 0.8);
      drawConstructionLines(ctx, W, H, linesProgress);
      drawAccents(ctx, W, H, accentAlpha, mouse);
      drawText(ctx, W, H, textProgress);
      drawTrail(ctx, mouse);
      drawMeasureLine(ctx, mouse);
      drawPins(ctx, mouse);
      drawCursor(ctx, mouse);

      animIdRef.current = requestAnimationFrame(loop);
    };

    animIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [
    drawGrid,
    drawTicks,
    drawCircles,
    drawConstructionLines,
    drawAccents,
    drawText,
    drawTrail,
    drawMeasureLine,
    drawPins,
    drawCursor,
    drawRevealZones,
  ]);

  // ─── Mouse events ─────────────────────────────────────────────────────────────
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
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
    if (mouse.trails.length > 22) mouse.trails.shift();
    if (Math.random() < 0.28) {
      revealedZonesRef.current.push({ x: nextX, y: nextY, r: 60, alpha: 1 });
      if (revealedZonesRef.current.length > 40) revealedZonesRef.current.shift();
    }
    if (!hintHiddenRef.current) {
      hintHiddenRef.current = true;
      setHintVisible(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const mouse = mouseRef.current;
    mouse.active = false;
    mouse.x = -1;
    mouse.y = -1;
    mouse.trails = [];
    mouse.velocityX = 0;
    mouse.velocityY = 0;
  }, []);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
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
      }, 3500);
    }
  }, []);

  const handleReplay = useCallback(() => {
    startAnimation();
    animStartRef.current = null;
  }, [startAnimation]);

  return (
    <Box
      ref={stageRef}
      component="section"
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 380, sm: 460, md: 560 },
        background: BG,
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'none',
        userSelect: 'none',
        border: '0.5px solid rgba(0,0,0,0.08)',
        mb: { xs: 6, md: 8 },
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      {/* Replay button */}
      <Button
        data-replay="true"
        onClick={handleReplay}
        sx={{
          position: 'absolute',
          top: 22,
          left: 26,
          opacity: replayVisible ? 1 : 0,
          transition: 'opacity 0.4s ease, color 0.2s, border-color 0.2s',
          border: '0.5px solid rgba(0,0,0,0.14)',
          borderRadius: '4px',
          px: 1.25,
          py: 0.625,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '9px',
          color: '#9BA19C',
          letterSpacing: '0.12em',
          minWidth: 0,
          lineHeight: 1,
          cursor: 'none',
          pointerEvents: replayVisible ? 'all' : 'none',
          '&:hover': {
            color: MAGENTA,
            borderColor: 'rgba(255,47,146,0.35)',
            backgroundColor: 'transparent',
          },
        }}
      >
        ↺ replay
      </Button>

      {/* Top-right spec block */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          right: 26,
          textAlign: 'right',
          opacity: uiVisible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }}
      >
        {['react · typescript · design systems', 'frontend architecture · component systems'].map(
          (line) => (
            <Box
              key={line}
              component="p"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '9px',
                color: '#9BA19C',
                letterSpacing: '0.1em',
                lineHeight: 2,
              }}
            >
              {line}
            </Box>
          ),
        )}
        <Box
          component="p"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '9px',
            color: MAGENTA,
            fontWeight: 500,
            letterSpacing: '0.1em',
            lineHeight: 2,
          }}
        >
          engineer with aesthetic discipline
        </Box>
      </Box>

      {/* Bottom-left title */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: 26,
          opacity: uiVisible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }}
      >
        <Box
          component="p"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '9px',
            color: '#9BA19C',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            mb: '3px',
          }}
        >
          project — portfolio / rev.03
        </Box>
        <Box
          component="p"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            color: '#4E5451',
            letterSpacing: '0.08em',
          }}
        >
          kira zakirov · senior frontend engineer · melbourne
        </Box>
      </Box>

      {/* Bottom-right CTA */}
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    position: 'absolute',*/}
      {/*    bottom: 24,*/}
      {/*    right: 26,*/}
      {/*    opacity: uiVisible ? 1 : 0,*/}
      {/*    transition: 'opacity 0.6s ease',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Box*/}
      {/*    component="a"*/}
      {/*    href="#web-projects"*/}
      {/*    sx={{*/}
      {/*      fontFamily: '"JetBrains Mono", monospace',*/}
      {/*      fontSize: '9px',*/}
      {/*      color: MAGENTA,*/}
      {/*      letterSpacing: '0.14em',*/}
      {/*      textDecoration: 'none',*/}
      {/*      borderBottom: `0.5px solid rgba(255,47,146,0.3)`,*/}
      {/*      pb: '2px',*/}
      {/*      transition: 'color 0.2s, border-color 0.2s',*/}
      {/*      cursor: 'pointer',*/}
      {/*      '&:hover': { color: ORANGE, borderColor: ORANGE },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    view full portfolio ↗*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      {/* Hint */}
      <Box
        component="p"
        sx={{
          position: 'absolute',
          bottom: '50%',
          left: '50%',
          transform: 'translate(-50%, 50%)',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '9px',
          color: '#9BA19C',
          letterSpacing: '0.14em',
          opacity: hintVisible ? 1 : 0,
          transition: 'opacity 0.8s',
          pointerEvents: 'none',
        }}
      >
        move cursor · click to measure
      </Box>

      {/* Corner brackets */}
      {['tl', 'tr', 'bl', 'br'].map((corner) => (
        <Box
          key={corner}
          sx={{
            position: 'absolute',
            width: 16,
            height: 16,
            opacity: uiVisible ? 1 : 0,
            transition: 'opacity 0.5s ease',
            top: corner.startsWith('t') ? 20 : 'auto',
            bottom: corner.startsWith('b') ? 20 : 'auto',
            left: corner.endsWith('l') ? 20 : 'auto',
            right: corner.endsWith('r') ? 20 : 'auto',
            transform:
              corner === 'tr'
                ? 'scaleX(-1)'
                : corner === 'bl'
                  ? 'scaleY(-1)'
                  : corner === 'br'
                    ? 'scale(-1)'
                    : 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '0.5px',
              top: 0,
              left: 0,
              background: 'rgba(0,0,0,0.22)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0.5px',
              height: '100%',
              top: 0,
              left: 0,
              background: 'rgba(0,0,0,0.22)',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default BlueprintHero;
