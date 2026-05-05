import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Box, IconButton } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

const FONT = '"Great Vibes", "Apple Chancery", cursive';
const DASH = 3000;

interface WrittenTextProps {
  text: string;
  fontSize: number;
  color: string;
  accentColor: string;
  delay: number;
  drawDuration: number;
}

const WrittenText = ({ text, fontSize, color, accentColor, delay, drawDuration }: WrittenTextProps) => {
  const textRef = React.useRef<SVGTextElement>(null);
  const [length, setLength] = React.useState(DASH);
  const [bbox, setBbox] = React.useState({ width: 400, height: 100 });

  React.useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const len = el.getComputedTextLength();
    setLength(Math.ceil(len * 4));
    const box = el.getBBox();
    setBbox({ width: Math.ceil(box.width + 20), height: Math.ceil(box.height + 20) });
  }, [text, fontSize]);

  const fillDelay = delay + drawDuration * 0.85;

  return (
    <svg
      viewBox={`0 0 ${bbox.width} ${bbox.height}`}
      style={{ width: '100%', height: 'auto', overflow: 'visible', display: 'block' }}
    >
      {/* Stroke draw */}
      <text
        ref={textRef}
        x="10"
        y={bbox.height * 0.75}
        fontFamily={FONT}
        fontSize={fontSize}
        fill="none"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        strokeDashoffset={length}
        style={{
          animation: `drawText ${drawDuration}s cubic-bezier(0.35, 0, 0.25, 1) ${delay}s forwards`,
        }}
      >
        {text}
      </text>

      {/* Fill reveal */}
      <text
        x="10"
        y={bbox.height * 0.75}
        fontFamily={FONT}
        fontSize={fontSize}
        fill={color}
        fillOpacity={0}
        stroke="none"
        style={{
          animation: `fillText 0.8s ease ${fillDelay}s forwards`,
        }}
      >
        {text}
      </text>

      {/* Pen tip (small dot that follows the stroke) */}
      <circle
        r={3}
        fill={accentColor}
        opacity={0}
        style={{
          animation: `penDot ${drawDuration}s cubic-bezier(0.35, 0, 0.25, 1) ${delay}s forwards`,
          offsetPath: `path("M10,${bbox.height * 0.75}")`,
        }}
      />
    </svg>
  );
};

const NamePage = () => {
  const [animKey, setAnimKey] = React.useState(0);

  return (
    <PortfolioLayout>
      <style>{`
        @keyframes drawText {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fillText {
          to { fill-opacity: 1; }
        }
      `}</style>

      <Box sx={styles.page}>
        <Box key={animKey} sx={styles.nameWrap}>
          <Box sx={styles.svgLine1}>
            <WrittenText
              text="Kira"
              fontSize={120}
              color="#141414"
              accentColor="#EA5221"
              delay={0.5}
              drawDuration={2}
            />
          </Box>
          <Box sx={styles.svgLine2}>
            <WrittenText
              text="Zakirova"
              fontSize={100}
              color="#EA5221"
              accentColor="#EA5221"
              delay={2.8}
              drawDuration={3}
            />
          </Box>
        </Box>

        <IconButton onClick={() => setAnimKey((prev) => prev + 1)} sx={styles.replayButton}>
          <ReplayIcon fontSize="small" />
        </IconButton>
      </Box>
    </PortfolioLayout>
  );
};

export default NamePage;
