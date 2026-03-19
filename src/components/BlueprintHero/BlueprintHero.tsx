import React from 'react';
import { Box, Button } from '@mui/material';

import { INTRO_DURATION } from './blueprintHero.constants';
import type { MouseState, RevealZone } from './blueprintHero.types';
import { useBlueprintDraw, easeOut, clamp } from './useBlueprintDraw';
import { useBlueprintMouse } from './useBlueprintMouse';
import { styles } from './blueprintStyles';

const CORNER_POSITIONS = ['tl', 'tr', 'bl', 'br'] as const;
type CornerPosition = (typeof CORNER_POSITIONS)[number];

const SPEC_LINES = [
  'react · typescript · design systems',
  'frontend architecture · component systems',
];

// ─── Component ────────────────────────────────────────────────────────────────
const BlueprintHero = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);
  const animIdRef = React.useRef<number>(0);
  const animStartRef = React.useRef<number | null>(null);
  const animCompleteRef = React.useRef(false);

  const mouseRef = React.useRef<MouseState>({
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
  const revealedZonesRef = React.useRef<RevealZone[]>([]);

  const [uiVisible, setUiVisible] = React.useState(false);
  const [replayVisible, setReplayVisible] = React.useState(false);
  const [hintVisible, setHintVisible] = React.useState(true);

  const {
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
  } = useBlueprintDraw();

  const handleFirstMove = React.useCallback(() => setHintVisible(false), []);

  const { handleMouseMove, handleMouseLeave, handleClick } = useBlueprintMouse({
    stageRef,
    mouseRef,
    revealedZonesRef,
    onFirstMove: handleFirstMove,
  });

  // ─── Animation reset ────────────────────────────────────────────────────────
  const startAnimation = React.useCallback(() => {
    animStartRef.current = null;
    animCompleteRef.current = false;
    setUiVisible(false);
    setReplayVisible(false);

    const mouse = mouseRef.current;
    mouse.measureStart = null;
    mouse.measureEnd = null;
    mouse.pins = [];
  }, []);

  const handleReplay = React.useCallback(() => {
    startAnimation();
    animStartRef.current = null;
  }, [startAnimation]);

  // ─── Animation loop ─────────────────────────────────────────────────────────
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canvasWidth = 0;
    let canvasHeight = 0;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      canvasWidth = rect.width;
      canvasHeight = rect.height;
      canvas.width = canvasWidth * devicePixelRatio;
      canvas.height = canvasHeight * devicePixelRatio;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
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

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = '#F6F7F4';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const mouse = mouseRef.current;
      const zones = revealedZonesRef.current;

      drawRevealZones(ctx, zones);
      drawGrid(ctx, canvasWidth, canvasHeight, gridAlpha, mouse);
      drawTicks(ctx, canvasWidth, canvasHeight, gridAlpha);
      drawCircles(ctx, canvasWidth, canvasHeight, circAlpha * 0.8);
      drawConstructionLines(ctx, canvasWidth, canvasHeight, linesProgress);
      drawAccents(ctx, canvasWidth, canvasHeight, accentAlpha, mouse);
      drawText(ctx, canvasWidth, canvasHeight, textProgress);
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

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <Box
      ref={stageRef}
      component="section"
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      sx={styles.stage}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      {/* Replay button */}
      <Button data-replay="true" onClick={handleReplay} sx={styles.replayButton(replayVisible)}>
        ↺ replay
      </Button>

      {/* Top-right spec block */}
      <Box sx={styles.specBlock(uiVisible)}>
        {SPEC_LINES.map((line) => (
          <Box key={line} component="p" sx={styles.specLine}>
            {line}
          </Box>
        ))}
        <Box component="p" sx={styles.specLineAccent}>
          engineer with aesthetic discipline
        </Box>
      </Box>

      {/* Bottom-left title */}
      <Box sx={styles.bottomLeft(uiVisible)}>
        <Box component="p" sx={styles.bottomLeftLabel}>
          project — portfolio / rev.03
        </Box>
        <Box component="p" sx={styles.bottomLeftTitle}>
          kira zakirov · senior frontend engineer · melbourne
        </Box>
      </Box>

      {/* Hint */}
      <Box component="p" sx={styles.hint(hintVisible)}>
        move cursor · click to measure
      </Box>

      {/* Corner brackets */}
      {CORNER_POSITIONS.map((corner: CornerPosition) => (
        <Box key={corner} sx={styles.cornerBracket(corner, uiVisible)} />
      ))}
    </Box>
  );
};

export default BlueprintHero;
