import { COLOR_TOKENS, TYPOGRAPHY_TOKENS } from '@/theme/themeTokens';

// Slide dimensions per breakpoint (used in JS calculations too)
const SLIDE_W_XS = 220;
const SLIDE_W_MD = 340;
const SLIDE_H_XS = 280;
const SLIDE_H_MD = 420;
const GAP = 60; // px between slide centers for side slides

export const styles = {
  // ── Tabs ─────────────────────────────────────────────────────────────────
  tabsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 1.5,
    mt: { xs: 3, md: 4 },
    mb: { xs: 4, md: 6 },
  },

  tab: (isActive: boolean) => ({
    px: { xs: 3, md: 4 },
    py: { xs: 1, md: 1.25 },
    borderRadius: '28px',
    border: `1.5px solid ${isActive ? COLOR_TOKENS.accentPrimary : COLOR_TOKENS.borderDefault}`,
    backgroundColor: isActive ? COLOR_TOKENS.accentPrimary : 'transparent',
    color: isActive ? '#fff' : COLOR_TOKENS.textSecondary,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: { xs: '0.75rem', md: '0.8rem' },
    fontWeight: isActive ? 600 : 400,
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 250ms ease',
    '&:hover': {
      borderColor: COLOR_TOKENS.accentPrimary,
      color: isActive ? '#fff' : COLOR_TOKENS.textPrimary,
    },
  }),

  // ── Coverflow wrapper ────────────────────────────────────────────────────
  coverflowWrapper: {
    position: 'relative',
    width: '100%',
    height: { xs: '55vh', sm: '62vh', md: '72vh' },
    minHeight: { xs: 360, md: 500 },
    perspective: '1000px',
    perspectiveOrigin: '50% 50%',
    overflow: 'hidden',
    userSelect: 'none',
  },

  // ── Slide (absolute, centred via left:50% + margin) ─────────────────────
  slide: (offset: number, total: number) => {
    const absOffset = Math.abs(offset);
    const maxVisible = 3;

    if (absOffset > maxVisible) {
      return {
        position: 'absolute' as const,
        visibility: 'hidden' as const,
        pointerEvents: 'none' as const,
      };
    }

    const isCenter = offset === 0;
    const dir = offset > 0 ? 1 : -1;

    // Scale: center=1, each step smaller
    const scale = isCenter ? 1 : Math.max(0.52, 1 - absOffset * 0.16);

    // Rotation: side cards rotate inward
    const rotateY = isCenter ? 0 : -dir * Math.min(absOffset * 40, 60);

    // Horizontal shift: push sides further apart
    const shiftPx = isCenter ? 0 : dir * (absOffset * (GAP + 100));

    // Depth: sides go back
    const translateZ = isCenter ? 60 : -(absOffset * 100);

    const zIndex = total + 10 - absOffset;

    return {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      // centre the slide, then apply offset
      transform: [
        `translate(-50%, -50%)`,
        `translateX(${shiftPx}px)`,
        `perspective(1000px)`,
        `rotateY(${rotateY}deg)`,
        `translateZ(${translateZ}px)`,
        `scale(${scale})`,
      ].join(' '),
      transformStyle: 'preserve-3d' as const,
      transition: 'all 550ms cubic-bezier(0.32, 0.72, 0, 1)',
      zIndex,
      opacity: isCenter ? 1 : Math.max(0.3, 1 - absOffset * 0.28),
      filter: isCenter ? 'none' : `brightness(${Math.max(0.45, 1 - absOffset * 0.2)})`,
      cursor: isCenter ? 'zoom-in' : 'pointer',
      pointerEvents: 'auto' as const,
    };
  },

  // ── Image frame ──────────────────────────────────────────────────────────
  frame: {
    width: { xs: SLIDE_W_XS, md: SLIDE_W_MD },
    height: { xs: SLIDE_H_XS, md: SLIDE_H_MD },
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 12px 50px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.1)',
    border: `4px solid ${COLOR_TOKENS.backgroundPaper}`,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  // ── Skeleton ─────────────────────────────────────────────────────────────
  skeleton: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(90deg, ${COLOR_TOKENS.backgroundElevated} 25%, ${COLOR_TOKENS.backgroundSubtle} 50%, ${COLOR_TOKENS.backgroundElevated} 75%)`,
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.6s ease-in-out infinite',
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
  },

  // ── Caption ──────────────────────────────────────────────────────────────
  caption: {
    textAlign: 'center',
    mt: { xs: 1, md: 2 },
    minHeight: 40,
  },

  captionText: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: { xs: '0.65rem', md: '0.75rem' },
    color: COLOR_TOKENS.textSecondary,
    letterSpacing: '0.04em',
    transition: 'opacity 300ms ease',
  },

  counter: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.55rem',
    color: COLOR_TOKENS.textDisabled,
    letterSpacing: '0.08em',
    mt: 0.5,
  },

  // ── Nav arrows ───────────────────────────────────────────────────────────
  navArrow: (disabled: boolean) => ({
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 50,
    width: { xs: 36, md: 44 },
    height: { xs: 36, md: 44 },
    borderRadius: '50%',
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    backgroundColor: `${COLOR_TOKENS.backgroundPaper}CC`,
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.25 : 1,
    transition: 'opacity 200ms ease, background-color 200ms ease',
    color: COLOR_TOKENS.textPrimary,
    padding: 0,
    '&:hover': {
      backgroundColor: disabled ? undefined : COLOR_TOKENS.backgroundPaper,
    },
  }),

  navPrev: {
    left: { xs: 4, md: 16 },
  },

  navNext: {
    right: { xs: 4, md: 16 },
  },

  // ── Lightbox ─────────────────────────────────────────────────────────────
  lightboxOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 1300,
    backgroundColor: 'rgba(8,8,8,0.97)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'zoom-out',
  },

  lightboxContent: {
    position: 'relative',
    width: '100%',
    maxWidth: '80vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    overflow: 'hidden',
  },

  lightboxImage: {
    maxWidth: { xs: '88vw', md: '70vw' },
    maxHeight: '78vh',
    objectFit: 'contain',
    display: 'block',
    borderRadius: '4px',
  },

  lightboxLabel: {
    mt: 3,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: { xs: '0.7rem', md: '0.8rem' },
    color: 'rgba(255,255,255,0.55)',
    letterSpacing: '0.04em',
    textAlign: 'center',
    maxWidth: 500,
  },

  lightboxClose: {
    position: 'fixed',
    top: { xs: 12, md: 24 },
    right: { xs: 12, md: 24 },
    width: { xs: 36, md: 44 },
    height: { xs: 36, md: 44 },
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    zIndex: 1301,
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
      color: '#fff',
    },
  },

  lightboxNav: {
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1301,
    width: { xs: 44, md: 52 },
    height: { xs: 44, md: 52 },
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: 'rgba(255,255,255,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms ease, color 200ms ease',
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.14)',
      color: '#fff',
    },
  },

  lightboxPrev: { left: { xs: 8, md: 24 } },
  lightboxNext: { right: { xs: 8, md: 24 } },

  lightboxCounter: {
    mt: 2,
    fontFamily: TYPOGRAPHY_TOKENS.fontFamilyMono,
    fontSize: '0.58rem',
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.1em',
  },
};
