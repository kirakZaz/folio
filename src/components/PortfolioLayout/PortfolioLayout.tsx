import React from 'react';

import { Box } from '@mui/material';

import { CONTACT_LINKS } from '@/shared/constants/contact.constants';

import Navigation from '@/components/Navigation/Navigation';

import { styles } from './PortfolioLayout.styles';
import type { PortfolioLayoutProps } from './PortfolioLayout.types';

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => (
  <Box sx={styles.root}>
    {/* Mobile top bar */}
    <Box sx={styles.mobileTopBar}>
      <Box
        component="img"
        src="/images/logo.png"
        alt="ZaKIRovA"
        sx={styles.mobileLogo}
      />
      <Box sx={styles.mobileNavScroll}>
        <Navigation orientation="horizontal" />
      </Box>
    </Box>

    {/* Desktop sidebar */}
    <Box component="aside" sx={styles.sidebar}>
      <Box
        component="img"
        src="/images/logo.png"
        alt="ZaKIRovA"
        sx={styles.desktopLogo}
      />

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

export default React.memo(PortfolioLayout);
