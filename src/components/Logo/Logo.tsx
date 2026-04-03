import React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import logoFull from '@/shared/assets/logo-full.png';
import logoSmall from '@/shared/assets/logo-small-zak.png';

import type { LogoProps } from './Logo.types';

const fullStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  maxWidth: 110,
  height: 'auto',
};
const smallStyle: React.CSSProperties = { display: 'block', height: 34, width: 'auto' };

function LogoFullImg() {
  return (
    <img
      src={logoFull}
      alt="ZaKIRovA"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  );
}

function LogoSmallImg() {
  return (
    <img
      src={logoSmall}
      alt="ZaKIRovA"
      style={{ height: '100%', width: 'auto', display: 'block' }}
    />
  );
}

const LogoFull = React.memo(LogoFullImg);
const LogoSmall = React.memo(LogoSmallImg);

const Logo = ({ style, className }: LogoProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div
      style={{ lineHeight: 0, ...(isMobile ? smallStyle : fullStyle), ...style }}
      className={className}
    >
      {isMobile ? <LogoSmall /> : <LogoFull />}
    </div>
  );
};

export default React.memo(Logo);
