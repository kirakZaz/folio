import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Box, IconButton } from '@mui/material';

import PortfolioLayout from '@/components/PortfolioLayout';

import { styles } from './NamePage.styles';

// Rough centerline guide paths — used as MASK, not visible directly.
// Thick stroke on these reveals the real font text underneath.
// Don't need to be pixel-perfect — just follow the writing order.

const KIRA_GUIDE =
  'M 15,72 C 17,50 20,28 24,8 ' +   // K stem
  'C 25,25 23,42 22,52 ' +            // K mid
  'C 32,34 50,14 62,12 ' +            // K upper arm
  'C 50,22 32,46 26,52 ' +            // K return
  'C 38,68 55,78 68,82 ' +            // K lower leg
  'C 74,78 78,58 76,42 ' +            // i up
  'C 74,56 72,74 76,84 ' +            // i down
  'C 82,74 86,54 90,42 ' +            // r up
  'C 96,34 106,32 114,36 ' +          // r curve
  'C 110,48 108,68 112,82 ' +         // r down
  'C 120,64 132,42 146,32 ' +         // a up
  'C 158,26 166,36 164,52 ' +         // a loop
  'C 162,66 150,80 142,82 ' +         // a bottom
  'C 136,84 142,62 156,46 ' +         // a re-up
  'C 162,56 166,74 170,84';           // a exit

const KIRA_DOT = 'M 78,24 L 80,24';

const ZAKIROVA_GUIDE =
  'M 22,40 C 10,24 32,10 58,14 ' +    // Z top
  'C 44,28 28,56 20,78 ' +            // Z diagonal
  'C 16,90 24,94 40,90 C 48,86 54,78 60,70 ' +  // Z bottom
  'C 68,52 80,36 92,30 ' +            // a up
  'C 104,24 112,34 110,50 ' +         // a loop
  'C 108,64 96,78 88,80 ' +           // a bottom
  'C 84,82 88,62 100,46 C 106,56 110,76 114,88 ' + // a exit
  'C 120,68 124,38 128,16 ' +         // k up
  'C 130,8 132,12 130,24 ' +          // k top
  'C 128,40 126,56 124,66 ' +         // k mid
  'C 132,52 144,36 152,38 ' +         // k notch
  'C 144,46 132,62 130,70 ' +         // k return
  'C 138,80 150,90 160,92 ' +         // k exit
  'C 166,86 170,66 168,48 ' +         // i up
  'C 166,62 164,78 168,90 ' +         // i down
  'C 174,80 180,60 184,46 ' +         // r up
  'C 190,36 200,34 208,38 ' +         // r curve
  'C 206,50 202,70 206,88 ' +         // r down
  'C 214,68 226,44 240,34 ' +         // o up
  'C 254,26 264,36 262,54 ' +         // o loop
  'C 260,70 248,84 240,86 ' +         // o bottom
  'C 234,88 240,66 256,48 ' +         // o exit
  'C 262,58 266,78 272,90 ' +         // v down
  'C 278,72 286,48 292,36 ' +         // v up
  'C 296,48 300,72 306,88 ' +         // v down2
  'C 314,68 326,44 340,34 ' +         // a up
  'C 352,28 360,36 358,54 ' +         // a loop
  'C 356,68 344,82 338,84 ' +         // a bottom
  'C 332,86 338,64 352,48 ' +         // a re-up
  'C 358,58 362,78 366,90';           // a exit

const ZAKIROVA_DOT = 'M 170,30 L 172,30';

const FONT = '"Apple Chancery", "Dancing Script", cursive';
const MASK_STROKE = 28; // thick enough to reveal full letter width

interface WrittenWordProps {
  text: string;
  guidePath: string;
  dotPath: string;
  viewBox: string;
  fontSize: number;
  textY: number;
  color: string;
  delay: number;
  duration: number;
  dotDelay: number;
}

const WrittenWord = ({
  text, guidePath, dotPath, viewBox, fontSize, textY, color, delay, duration, dotDelay,
}: WrittenWordProps) => {
  const guideRef = React.useRef<SVGPathElement>(null);
  const [guideLength, setGuideLength] = React.useState(3000);

  React.useEffect(() => {
    if (guideRef.current) {
      setGuideLength(Math.ceil(guideRef.current.getTotalLength()) + 10);
    }
  }, [guidePath]);

  const maskId = React.useId();

  return (
    <svg viewBox={viewBox} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
      <defs>
        <mask id={maskId}>
          {/* Animated thick stroke reveals the text */}
          <path
            ref={guideRef}
            d={guidePath}
            fill="none"
            stroke="white"
            strokeWidth={MASK_STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={guideLength}
            strokeDashoffset={guideLength}
            style={{
              animation: `drawLine ${duration}s cubic-bezier(0.25, 0, 0.15, 1) ${delay}s forwards`,
            }}
          />
          {/* Dot mask */}
          <circle
            cx={dotPath ? parseFloat(dotPath.split(' ')[1]) : 0}
            cy={dotPath ? parseFloat(dotPath.split(' ')[2] || dotPath.split(',')[1]) : 0}
            r={MASK_STROKE / 2}
            fill="white"
            opacity={0}
            style={{
              animation: `dotAppear 0.15s ease ${dotDelay}s forwards`,
            }}
          />
        </mask>
      </defs>

      {/* The actual font text, revealed by the mask */}
      <text
        x="10"
        y={textY}
        fontFamily={FONT}
        fontSize={fontSize}
        fontWeight={400}
        fill={color}
        mask={`url(#${maskId})`}
      >
        {text}
      </text>
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
            <WrittenWord
              text="Kira"
              guidePath={KIRA_GUIDE}
              dotPath={KIRA_DOT}
              viewBox="0 -10 185 110"
              fontSize={80}
              textY={75}
              color="#141414"
              delay={0.5}
              duration={2.5}
              dotDelay={2}
            />
          </Box>
          <Box sx={styles.svgLine2}>
            <WrittenWord
              text="Zakirova"
              guidePath={ZAKIROVA_GUIDE}
              dotPath={ZAKIROVA_DOT}
              viewBox="0 -10 385 110"
              fontSize={70}
              textY={78}
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