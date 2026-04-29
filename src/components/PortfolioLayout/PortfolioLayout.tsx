import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Snackbar, Tooltip } from '@mui/material';

import { ROUTES } from '@/shared';

import { CONTACT_LINKS } from '@/shared/constants/contact.constants';

import Logo from '@/components/Logo/Logo.tsx';
import Navigation from '@/components/Navigation/Navigation';

import { styles } from './PortfolioLayout.styles';
import type { PortfolioLayoutProps } from './PortfolioLayout.types';

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const navigate = useNavigate();

  const [toastOpen, setToastOpen] = React.useState(false);

  const handleCopy = React.useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setToastOpen(true);
  }, []);

  return (
    <Box sx={styles.root}>
      {/* Mobile top bar */}
      <Box sx={styles.mobileTopBar}>
        <Box component="div" onClick={() => navigate(ROUTES.ABOUT)} sx={styles.mobileLogo}>
          <Logo />
        </Box>

        <Box sx={styles.mobileNavScroll}>
          <Navigation orientation="horizontal" />
        </Box>
      </Box>

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
