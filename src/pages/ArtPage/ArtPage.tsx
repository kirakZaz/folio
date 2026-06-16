import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Portal, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { BAGS_DATA } from '@/shared/constants/bags.constants';
import { DRAWINGS_DATA } from '@/shared/constants/drawings.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './ArtPage.styles';

// ── Types ──────────────────────────────────────────────────────────────────────
interface GalleryItem {
  id: string;
  imageUrl: string;
  label?: string;
}

type TabId = 'drawings' | 'bags';

const TABS: { id: TabId; label: string; items: GalleryItem[] }[] = [
  { id: 'drawings', label: 'Drawings', items: DRAWINGS_DATA },
  { id: 'bags', label: 'Handmade Bags', items: BAGS_DATA },
];

// ── Slide with skeleton ────────────────────────────────────────────────────────
interface SlideFrameProps {
  item: GalleryItem;
}

const SlideFrame = React.memo(({ item }: SlideFrameProps) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Box sx={styles.frame}>
      {!loaded && <Box sx={styles.skeleton} />}
      <Box
        component="img"
        src={item.imageUrl}
        alt={item.label || `Artwork by Kira Zakirova`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sx={{ ...styles.image, opacity: loaded ? 1 : 0 }}
      />
    </Box>
  );
});

// ── Lightbox ──────────────────────────────────────────────────────────────────
interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const IMAGE_VARIANTS = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.95,
  }),
};

const Lightbox = React.memo(({ items, index, onClose, onPrev, onNext }: LightboxProps) => {
  const currentItem = items[index];
  const directionRef = React.useRef(0);

  const handlePrev = React.useCallback(() => {
    directionRef.current = -1;
    onPrev();
  }, [onPrev]);

  const handleNext = React.useCallback(() => {
    directionRef.current = 1;
    onNext();
  }, [onNext]);

  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  // Touch swipe inside lightbox
  const touchRef = React.useRef(0);

  const handleTouchStart = React.useCallback((event: React.TouchEvent) => {
    touchRef.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = React.useCallback((event: React.TouchEvent) => {
    const delta = event.changedTouches[0].clientX - touchRef.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) handleNext();
      else handlePrev();
    }
  }, [handlePrev, handleNext]);

  return (
    <Portal>
      {/* Backdrop — fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ position: 'fixed', inset: 0, zIndex: 1300 }}
      >
        <Box sx={styles.lightboxOverlay} onClick={onClose}>
          {/* Close button */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Box component="button" sx={styles.lightboxClose} onClick={onClose}>
              <CloseIcon fontSize="small" />
            </Box>
          </motion.div>

          {/* Prev arrow — fixed at left edge */}
          {items.length > 1 && (
            <Box
              component={motion.button}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              sx={{ ...styles.lightboxNav, ...styles.lightboxPrev }}
              onClick={(event: React.MouseEvent) => { event.stopPropagation(); handlePrev(); }}
            >
              <NavigateBeforeIcon />
            </Box>
          )}

          {/* Next arrow — fixed at right edge */}
          {items.length > 1 && (
            <Box
              component={motion.button}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              sx={{ ...styles.lightboxNav, ...styles.lightboxNext }}
              onClick={(event: React.MouseEvent) => { event.stopPropagation(); handleNext(); }}
            >
              <NavigateNextIcon />
            </Box>
          )}

          {/* Image + caption area */}
          <Box
            sx={styles.lightboxContent}
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" custom={directionRef.current}>
              <motion.div
                key={currentItem.id}
                custom={directionRef.current}
                variants={IMAGE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Box component="img" src={currentItem.imageUrl} alt={currentItem.label || 'Artwork by Kira Zakirova'} sx={styles.lightboxImage} />

                {currentItem.label && (
                  <Typography sx={styles.lightboxLabel}>{currentItem.label}</Typography>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Typography sx={styles.lightboxCounter}>{index + 1} / {items.length}</Typography>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Portal>
  );
});

// ── ArtPage ───────────────────────────────────────────────────────────────────
const ArtPage = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>('drawings');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const currentTabData = TABS.find((tab) => tab.id === activeTab)!;
  const items = currentTabData.items;

  const handleTabChange = React.useCallback((tabId: TabId) => {
    setActiveTab(tabId);
    setActiveIndex(0);
  }, []);

  const goPrev = React.useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = React.useCallback(() => {
    setActiveIndex((prev) => Math.min(items.length - 1, prev + 1));
  }, [items.length]);

  const handleSlideClick = React.useCallback((slideIndex: number) => {
    if (slideIndex === activeIndex) {
      setLightboxIndex(slideIndex);
    } else {
      setActiveIndex(slideIndex);
    }
  }, [activeIndex]);

  // Keyboard nav for coverflow
  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (lightboxIndex !== null) return;
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goPrev, goNext, lightboxIndex]);

  // Touch swipe for coverflow
  const touchStartRef = React.useRef(0);

  const handleTouchStart = React.useCallback((event: React.TouchEvent) => {
    touchStartRef.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = React.useCallback((event: React.TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  }, [goPrev, goNext]);

  // Lightbox handlers
  const closeLightbox = React.useCallback(() => setLightboxIndex(null), []);

  const lightboxPrev = React.useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + items.length) % items.length : null);
  }, [items.length]);

  const lightboxNext = React.useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % items.length : null);
  }, [items.length]);

  return (
    <PortfolioLayout>
      <SeoHead
        title="Art — Kira Zakirova | Drawings & Handmade Bags"
        description="Original drawings and handmade leather bags by Kira Zakirova. A gallery of personal art projects."
        path="/art"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Art by Kira Zakirova',
          description: 'Personal creative work — original pencil and ink drawings, and handmade leather bags.',
          url: 'https://folio-kiraz.vercel.app/art',
        }}
      />
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={DEFAULT_TRANSITION}
        style={{ width: '100%' }}
      >
        <SectionHeader index="05" label="Art" count={items.length} headingLevel="h1" />

        <Typography
          component="h2"
          sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', clipPath: 'inset(50%)' }}
        >
          {currentTabData.label} Gallery
        </Typography>

        {/* Tabs */}
        <Box sx={styles.tabsRow} role="tablist">
          {TABS.map((tab) => (
            <Box
              key={tab.id}
              component="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              sx={styles.tab(activeTab === tab.id)}
            >
              {tab.label}
            </Box>
          ))}
        </Box>

        {/* Coverflow */}
        <Box
          sx={styles.coverflowWrapper}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev arrow */}
          <Box
            component="button"
            onClick={goPrev}
            sx={{ ...styles.navArrow(activeIndex === 0), ...styles.navPrev }}
          >
            <NavigateBeforeIcon fontSize="small" />
          </Box>

          {/* Slides */}
          {items.map((item, slideIndex) => {
            const offset = slideIndex - activeIndex;

            return (
              <Box
                key={item.id}
                onClick={() => handleSlideClick(slideIndex)}
                sx={styles.slide(offset, items.length)}
              >
                <SlideFrame item={item} />
              </Box>
            );
          })}

          {/* Next arrow */}
          <Box
            component="button"
            onClick={goNext}
            sx={{ ...styles.navArrow(activeIndex === items.length - 1), ...styles.navNext }}
          >
            <NavigateNextIcon fontSize="small" />
          </Box>
        </Box>

        {/* Caption */}
        <Box sx={styles.caption}>
          <Typography sx={styles.captionText}>
            {items[activeIndex]?.label ?? ''}
          </Typography>
          <Typography sx={styles.counter}>
            {activeIndex + 1} / {items.length}
          </Typography>
        </Box>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={items}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={lightboxPrev}
            onNext={lightboxNext}
          />
        )}
      </AnimatePresence>
    </PortfolioLayout>
  );
};

export default ArtPage;
