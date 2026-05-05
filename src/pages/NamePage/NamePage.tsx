import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Box, IconButton } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

// Hand-traced centerline paths — single continuous stroke per word
// ViewBox: 0 0 340 140 for Kira, 0 0 560 140 for Zakirova
// Baseline ≈ 105, x-height ≈ 50, ascender ≈ 10

const KIRA_MAIN =
  // K: start at baseline, up to top
  'M 22,108 C 20,80 18,45 20,12 ' +
  // K: back down to middle
  'C 22,32 24,48 22,60 ' +
  // K: upper arm out
  'C 34,38 52,15 65,18 ' +
  // K: return to middle
  'C 52,28 34,50 27,60 ' +
  // K: lower leg out + connector to i
  'C 40,78 58,98 75,105 ' +
  // i: upstroke
  'C 80,98 84,72 82,48 ' +
  // i: downstroke + exit
  'C 80,65 78,88 82,108 ' +
  // connector to r
  'C 88,98 94,72 96,50 ' +
  // r: top curve
  'C 100,38 112,34 120,40 ' +
  // r: down + connector
  'C 118,52 114,78 118,105 ' +
  // connector to a
  'C 125,85 136,55 150,42 ' +
  // a: loop right
  'C 162,34 172,42 170,60 ' +
  // a: loop back down
  'C 168,78 155,95 145,98 ' +
  // a: re-ascend and exit
  'C 140,100 145,78 158,58 ' +
  // a: final downstroke
  'C 165,72 170,92 175,108';

const KIRA_DOT = 'M 84,28 C 86,24 90,24 88,28 C 86,32 82,32 84,28';

const ZAKIROVA_MAIN =
  // Z: top loop
  'M 18,38 C 8,22 35,8 62,15 ' +
  // Z: diagonal down
  'C 42,35 25,68 18,95 ' +
  // Z: bottom + connector
  'C 15,108 28,112 42,108 C 50,105 55,98 60,90 ' +
  // a: upstroke into loop
  'C 68,68 80,45 92,38 ' +
  // a: loop right
  'C 104,32 112,42 110,58 ' +
  // a: loop bottom + exit
  'C 108,75 96,92 88,95 C 84,96 88,75 100,55 ' +
  // a: exit down
  'C 106,68 110,90 114,108 ' +
  // connector to k
  'C 120,92 126,62 130,42 ' +
  // k: up to ascender
  'C 132,22 134,8 136,12 ' +
  // k: back down
  'C 138,28 136,55 134,72 ' +
  // k: upper notch
  'C 142,55 155,38 162,40 ' +
  // k: back + lower leg
  'C 152,48 140,62 138,72 C 148,82 160,100 170,105 ' +
  // connector to i
  'C 176,102 180,78 178,52 ' +
  // i: downstroke + exit
  'C 176,68 174,90 178,108 ' +
  // connector to r
  'C 184,96 190,70 194,52 ' +
  // r: top curve
  'C 198,40 210,36 218,42 ' +
  // r: down + connector
  'C 216,54 212,80 216,105 ' +
  // connector to o
  'C 224,85 234,55 248,42 ' +
  // o: loop
  'C 262,32 274,42 272,62 ' +
  'C 270,82 256,100 244,102 ' +
  // o: exit
  'C 238,103 244,78 260,55 ' +
  // connector to v
  'C 268,68 272,88 278,108 ' +
  // v: up right
  'C 284,82 292,55 298,42 ' +
  // v: down right
  'C 302,55 308,82 314,108 ' +
  // connector to a
  'C 320,88 330,58 344,42 ' +
  // a: loop right
  'C 356,34 366,42 364,60 ' +
  // a: loop bottom
  'C 362,78 350,95 340,98 ' +
  // a: re-ascend + exit
  'C 335,100 340,78 354,58 ' +
  'C 360,70 364,90 368,108';

const ZAKIROVA_DOT = 'M 180,32 C 182,28 186,28 184,32 C 182,36 178,36 180,32';

interface HandwrittenWordProps {
  mainPath: string;
  dotPath?: string;
  viewBox: string;
  color: string;
  strokeWidth: number;
  delay: number;
  duration: number;
  dotDelay?: number;
}

const HandwrittenWord = ({
  mainPath,
  dotPath,
  viewBox,
  color,
  strokeWidth,
  delay,
  duration,
  dotDelay,
}: HandwrittenWordProps) => {
  const mainRef = React.useRef<SVGPathElement>(null);
  const [mainLength, setMainLength] = React.useState(2000);

  React.useEffect(() => {
    if (mainRef.current) {
      setMainLength(Math.ceil(mainRef.current.getTotalLength()));
    }
  }, [mainPath]);

  return (
    <svg viewBox={viewBox} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
      <path
        ref={mainRef}
        d={mainPath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={mainLength}
        strokeDashoffset={mainLength}
        style={{
          animation: `drawLine ${duration}s cubic-bezier(0.3, 0, 0.2, 1) ${delay}s forwards`,
        }}
      />
      {dotPath && (
        <path
          d={dotPath}
          fill={color}
          opacity={0}
          style={{
            animation: `dotAppear 0.15s ease ${dotDelay ?? delay + duration * 0.5}s forwards`,
          }}
        />
      )}
    </svg>
  );
};

const NamePage = () => {
  const [animKey, setAnimKey] = React.useState(0);

  return (
    <PortfolioLayout>
      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dotAppear {
          to { opacity: 1; }
        }
      `}</style>

      <Box sx={styles.page}>
        <Box key={animKey} sx={styles.nameWrap}>
          <Box sx={styles.svgLine1}>
            <HandwrittenWord
              mainPath={KIRA_MAIN}
              dotPath={KIRA_DOT}
              viewBox="0 0 190 125"
              color="#141414"
              strokeWidth={2.5}
              delay={0.3}
              duration={2.5}
              dotDelay={1.8}
            />
          </Box>
          <Box sx={styles.svgLine2}>
            <HandwrittenWord
              mainPath={ZAKIROVA_MAIN}
              dotPath={ZAKIROVA_DOT}
              viewBox="0 0 385 125"
              color="#EA5221"
              strokeWidth={2.2}
              delay={3}
              duration={4}
              dotDelay={4.8}
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
