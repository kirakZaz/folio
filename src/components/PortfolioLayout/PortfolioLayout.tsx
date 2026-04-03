import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { ROUTES } from '@/shared';

import { CONTACT_LINKS } from '@/shared/constants/contact.constants';

import Navigation from '@/components/Navigation/Navigation';

import { styles } from './PortfolioLayout.styles';
import type { PortfolioLayoutProps } from './PortfolioLayout.types';

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.root}>
      {/* Mobile top bar */}
      <Box sx={styles.mobileTopBar}>
        <Box component="div" onClick={() => navigate(ROUTES.ABOUT)}>
          <Box component="img" src="/images/logo-small.svg" alt="ZaKIRovA" sx={styles.mobileLogo} />
        </Box>
        <Box sx={styles.mobileNavScroll}>
          <Navigation orientation="horizontal" />
        </Box>
      </Box>

      {/* Desktop sidebar */}
      <Box component="aside" sx={styles.sidebar}>
        <Box component="div" onClick={() => navigate(ROUTES.ABOUT)}>
          <Box component="img" src="/images/logo.svg" alt="ZaKIRovA" sx={styles.desktopLogo} />
        </Box>

        <Box sx={styles.navBlock}>
          <Navigation orientation="vertical" />
        </Box>

        {/* Contacts pinned to bottom */}
        <Box sx={styles.contactsBlock}>
          <Box sx={styles.contactsCaption}>Contact</Box>
          {CONTACT_LINKS.map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.contactLink}
            >
              <Box sx={styles.contactDot} />
              <Box className="contact-label" sx={styles.contactLabel}>
                {link.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="main" sx={styles.content}>
        {children}
      </Box>
    </Box>
  );
};

export default React.memo(PortfolioLayout);
