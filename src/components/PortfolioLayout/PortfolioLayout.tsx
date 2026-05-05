import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Snackbar, Tooltip, Typography } from '@mui/material';

import { ROUTES } from '@/shared';

import { CONTACT_LINKS } from '@/shared/constants/contact.constants';

import Logo from '@/components/Logo/Logo.tsx';
import Navigation from '@/components/Navigation/Navigation';

import { styles } from './PortfolioLayout.styles';
import type { PortfolioLayoutProps } from './PortfolioLayout.types';

const NAV_ITEMS = [
  { label: 'Experience', route: ROUTES.EXPERIENCE },
  { label: 'About me', route: ROUTES.ABOUT },
  { label: 'Degree', route: ROUTES.JOURNEY },
  { label: 'Art', route: ROUTES.ART },
];

const MENU_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toastOpen, setToastOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleCopy = React.useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setToastOpen(true);
  }, []);

  const handleNav = React.useCallback(
    (route: string) => {
      navigate(route);
      setMenuOpen(false);
    },
    [navigate],
  );

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <Box sx={styles.root}>
      {/* Mobile top bar */}
      <Box sx={styles.mobileTopBar}>
        <Box component="div" onClick={() => handleNav(ROUTES.ABOUT)} sx={styles.mobileLogo}>
          <Logo />
        </Box>

        <IconButton onClick={() => setMenuOpen((prev) => !prev)} sx={styles.burgerButton}>
          {menuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </IconButton>
      </Box>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={MENU_VARIANTS}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', top: 49, left: 0, right: 0, zIndex: 99 }}
          >
            <Box sx={styles.mobileDropdown}>
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.route;
                return (
                  <Box
                    key={item.route}
                    component="button"
                    onClick={() => handleNav(item.route)}
                    sx={styles.mobileNavItem(isActive)}
                  >
                    <Typography sx={styles.mobileNavLabel(isActive)}>{item.label}</Typography>
                  </Box>
                );
              })}

              <Box sx={styles.mobileContactsRow}>
                {CONTACT_LINKS.map((link) => (
                  <Tooltip key={link.label} title={link.tooltip} placement="bottom" arrow>
                    {link.copyValue ? (
                      <Box
                        component="button"
                        onClick={() => handleCopy(link.copyValue)}
                        sx={styles.contactLink}
                      >
                        <Box component="img" src={link.icon} alt={link.label} sx={styles.mobileContactIcon} />
                      </Box>
                    ) : (
                      <Box
                        component="a"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={styles.contactLink}
                      >
                        <Box component="img" src={link.icon} alt={link.label} sx={styles.mobileContactIcon} />
                      </Box>
                    )}
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <Box component="aside" sx={styles.sidebar}>
        <Box component="div" onClick={() => navigate(ROUTES.ABOUT)} sx={styles.desktopLogo}>
          <Logo />
        </Box>

        <Box sx={styles.navBlock}>
          <Navigation orientation="vertical" />
        </Box>

        {/* Contacts pinned to bottom */}
        <Box sx={styles.contactsBlock}>
          <Box sx={styles.contactsCaption}>Contact</Box>

          {CONTACT_LINKS.map((link) => (
            <Tooltip key={link.label} title={link.tooltip} placement="right" arrow>
              {link.copyValue ? (
                <Box
                  component="button"
                  onClick={() => handleCopy(link.copyValue)}
                  sx={styles.contactLink}
                >
                  <Box component="img" src={link.icon} alt={link.label} sx={styles.contactIcon} />
                </Box>
              ) : (
                <Box
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={styles.contactLink}
                >
                  <Box component="img" src={link.icon} alt={link.label} sx={styles.contactIcon} />
                </Box>
              )}
            </Tooltip>
          ))}
        </Box>
      </Box>

      <Box component="main" sx={styles.content}>
        {children}
      </Box>

      <Snackbar
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message="Email copied"
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default React.memo(PortfolioLayout);