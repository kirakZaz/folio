import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Box, IconButton } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

// Apple Chancery-style centerline paths — traced from target reference
// Each word is a single continuous stroke (+ separate dot for i)

// "Kira" — italic calligraphic K, connected i, r, a
// viewBox: 0 0 300 100
const KIRA_MAIN =
  // K: stem up (italic lean)
  'M 15,82 C 17,58 19,32 24,10 ' +
  // K: back down to mid
  'C 25,28 23,42 22,52 ' +
  // K: upper arm — elegant curve out right
  'C 30,34 45,16 58,14 ' +
  // K: return to middle
  'C 48,22 32,44 26,52 ' +
  // K: lower leg — sweeping out right to baseline
  'C 35,68 50,80 65,84 ' +
  // connection to i — upstroke
  'C 70,80 74,62 72,46 ' +
  // i: downstroke back to baseline
  'C 70,60 69,76 72,86 ' +
  // connection to r — upstroke
  'C 78,76 82,58 85,44 ' +
  // r: top curve
  'C 90,36 98,34 105,38 ' +
  // r: down to baseline + exit
  'C 102,50 100,70 104,84 ' +
  // connection to a — upstroke into loop
  'C 112,66 122,42 134,34 ' +
  // a: loop right side
  'C 144,28 152,38 150,52 ' +
  // a: loop bottom — back left
  'C 148,66 138,80 130,82 ' +
  // a: re-ascend through loop
  'C 124,84 130,64 142,48 ' +
  // a: final exit stroke
  'C 148,58 152,76 156,86';

const KIRA_DOT = 'M 74,30 C 75,26 79,26 78,30 C 77,34 73,34 74,30';

// "Zakirova" — italic calligraphic Z, connected a-k-i-r-o-v-a
// viewBox: 0 0 430 105
const ZAKIROVA_MAIN =
  // Z: top flourish — leftward loop then right
  'M 20,42 C 10,26 30,12 55,16 ' +
  // Z: diagonal stroke down-left
  'C 42,30 28,56 18,78 ' +
  // Z: bottom curve + connector right
  'C 14,90 22,94 38,90 C 46,87 52,80 58,72 ' +
  // a: upstroke into loop
  'C 65,54 76,38 86,32 ' +
  // a: loop right
  'C 96,26 104,36 102,50 ' +
  // a: loop bottom + exit
  'C 100,64 90,78 84,80 C 80,82 84,62 96,46 ' +
  // a: exit downstroke
  'C 102,56 106,76 110,88 ' +
  // connector to k — upstroke to ascender
  'C 116,68 120,38 124,16 ' +
  // k: ascender top
  'C 126,8 128,12 126,24 ' +
  // k: back down to mid
  'C 124,40 122,56 120,65 ' +
  // k: upper notch out
  'C 128,52 140,36 148,38 ' +
  // k: back to mid + lower leg
  'C 140,46 128,60 126,68 C 134,78 146,88 156,90 ' +
  // connector to i — upstroke
  'C 162,84 166,64 164,46 ' +
  // i: downstroke + exit
  'C 162,60 160,78 164,90 ' +
  // connector to r
  'C 170,78 176,58 180,44 ' +
  // r: top curve
  'C 185,34 194,32 202,36 ' +
  // r: down + exit
  'C 200,48 196,70 200,88 ' +
  // connector to o — upstroke
  'C 208,68 218,44 230,34 ' +
  // o: loop right
  'C 242,26 252,36 250,52 ' +
  // o: loop bottom
  'C 248,68 238,82 230,84 ' +
  // o: exit upward
  'C 224,86 230,64 244,48 ' +
  // connector to v
  'C 250,58 254,78 260,90 ' +
  // v: upstroke right
  'C 266,72 274,48 280,36 ' +
  // v: downstroke
  'C 284,48 288,72 294,88 ' +
  // connector to a — upstroke
  'C 302,68 312,44 324,34 ' +
  // a: loop right
  'C 334,28 342,36 340,52 ' +
  // a: loop bottom
  'C 338,66 328,80 322,82 ' +
  // a: re-ascend + exit
  'C 318,84 322,64 336,48 ' +
  'C 342,58 346,78 350,90';

const ZAKIROVA_DOT = 'M 166,28 C 167,24 171,24 170,28 C 169,32 165,32 166,28';

interface HandwrittenWordProps {
  mainPath: string;
  dotPath: string;
  viewBox: string;
  color: string;
  delay: number;
  duration: number;
  dotDelay: number;
}

const HandwrittenWord = ({ mainPath, dotPath, viewBox, color, delay, duration, dotDelay }: HandwrittenWordProps) => {
  const mainRef = React.useRef<SVGPathElement>(null);
  const [length, setLength] = React.useState(2000);

  React.useEffect(() => {
    if (mainRef.current) {
      setLength(Math.ceil(mainRef.current.getTotalLength()) + 10);
    }
  }, [mainPath]);

  return (
    <svg viewBox={viewBox} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
      <path
        ref={mainRef}
        d={mainPath}
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        strokeDashoffset={length}
        style={{ animation: `drawLine ${duration}s cubic-bezier(0.3, 0, 0.15, 1) ${delay}s forwards` }}
      />
      <path
        d={dotPath}
        fill={color}
        opacity={0}
        style={{ animation: `dotAppear 0.12s ease ${dotDelay}s forwards` }}
      />
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
              viewBox="0 0 170 100"
              color="#141414"
              delay={0.5}
              duration={2.5}
              dotDelay={2}
            />
          </Box>
          <Box sx={styles.svgLine2}>
            <HandwrittenWord
              mainPath={ZAKIROVA_MAIN}
              dotPath={ZAKIROVA_DOT}
              viewBox="0 0 365 105"
              color="#EA5221"
              delay={3.2}
              duration={4}
              dotDelay={5.5}
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
