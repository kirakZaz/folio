// HorizontalCarousel.tsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import type { HorizontalCarouselProps } from './types';
import { styles } from './horizontalCarouselStyles';

const SCROLL_STEP_PX = 320;
const DRAG_THRESHOLD_PX = 5;

const HorizontalCarousel = ({ children, sectionLabel, headerAction }: HorizontalCarouselProps) => {
  const scrollTrackRef = React.useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [activeDotIndex, setActiveDotIndex] = React.useState(0);

  const isDraggingRef = React.useRef(false);
  const dragStartXRef = React.useRef(0);
  const scrollStartRef = React.useRef(0);

  const childCount = React.Children.count(children);

  // ── Scroll state sync ────────────────────────────────────────────
  const syncScrollState = React.useCallback(() => {
    const track = scrollTrackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);

    const maxScroll = scrollWidth - clientWidth;
    const dotIndex = maxScroll > 0 ? Math.round((scrollLeft / maxScroll) * (childCount - 1)) : 0;
    setActiveDotIndex(dotIndex);
  }, [childCount]);

  React.useEffect(() => {
    const track = scrollTrackRef.current;
    if (!track) return;

    syncScrollState();

    track.addEventListener('scroll', syncScrollState, { passive: true });
    return () => track.removeEventListener('scroll', syncScrollState);
  }, [syncScrollState]);

  // ── Button navigation ────────────────────────────────────────────
  const handleScrollLeft = React.useCallback(() => {
    const track = scrollTrackRef.current;
    if (!track) return;
    track.scrollBy({ left: -SCROLL_STEP_PX, behavior: 'smooth' });
  }, []);

  const handleScrollRight = React.useCallback(() => {
    const track = scrollTrackRef.current;
    if (!track) return;
    track.scrollBy({ left: SCROLL_STEP_PX, behavior: 'smooth' });
  }, []);

  // ── Dot navigation ───────────────────────────────────────────────
  const handleDotClick = React.useCallback(
    (dotIndex: number) => {
      const track = scrollTrackRef.current;
      if (!track) return;

      const { scrollWidth, clientWidth } = track;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (dotIndex / (childCount - 1)) * maxScroll;
      track.scrollTo({ left: targetScroll, behavior: 'smooth' });
    },
    [childCount],
  );

  // ── Keyboard navigation ──────────────────────────────────────────
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handleScrollLeft();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleScrollRight();
      }
    },
    [handleScrollLeft, handleScrollRight],
  );

  // ── Mouse drag ───────────────────────────────────────────────────
  const handleMouseDown = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const track = scrollTrackRef.current;
    if (!track) return;

    isDraggingRef.current = false;
    dragStartXRef.current = event.clientX;
    scrollStartRef.current = track.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - dragStartXRef.current;

      if (Math.abs(deltaX) > DRAG_THRESHOLD_PX) {
        isDraggingRef.current = true;
      }

      if (isDraggingRef.current && scrollTrackRef.current) {
        scrollTrackRef.current.scrollLeft = scrollStartRef.current - deltaX;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      // Short delay so click events after drag don't fire
      setTimeout(() => {
        isDraggingRef.current = false;
      }, 0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  // Prevent click propagation on children when user was dragging
  const handleClickCapture = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      event.stopPropagation();
    }
  }, []);

  return (
    <Box
      component="section"
      aria-label={sectionLabel}
      sx={styles.section}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ── Header ────────────────────────────────────────────────── */}
      <Box sx={styles.header}>
        <Typography variant="caption" component="p" sx={styles.sectionLabel}>
          {sectionLabel}
        </Typography>
        {headerAction}
      </Box>

      {/* ── Scroll area with nav buttons ──────────────────────────── */}
      <Box sx={styles.scrollWrapper}>
        <IconButton
          aria-label="Scroll left"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
          sx={{ ...styles.navButton, ...styles.navButtonPrev }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          ref={scrollTrackRef}
          role="list"
          aria-label={`${sectionLabel} items`}
          sx={styles.scrollTrack}
          onMouseDown={handleMouseDown}
          onClickCapture={handleClickCapture}
        >
          {children}
        </Box>

        <IconButton
          aria-label="Scroll right"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
          sx={{ ...styles.navButton, ...styles.navButtonNext }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* ── Dots ──────────────────────────────────────────────────── */}
      {childCount > 1 && (
        <Box sx={styles.dotsContainer} role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: childCount }, (_, dotIndex) => (
            <Box
              key={dotIndex}
              component="button"
              role="tab"
              aria-selected={dotIndex === activeDotIndex}
              aria-label={`Go to item ${dotIndex + 1}`}
              onClick={() => handleDotClick(dotIndex)}
              sx={styles.dot(dotIndex === activeDotIndex)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default HorizontalCarousel;
