import { monoUppercase } from '@/theme/commonStyles';
import { COLOR_TOKENS } from '@/theme/themeTokens';

export const styles = {
  root: {
    minHeight: '100vh',
  },

  heroSection: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    gap: { xs: 4, md: 8 },
    alignItems: { xs: 'flex-start', md: 'center' },
    mb: { xs: 6, md: 10 },
  },

  textBlock: {
    flex: 1,
  },

  nameHeading: {
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    mb: 2,
    color: COLOR_TOKENS.textPrimary,
  },

  bioText: {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: COLOR_TOKENS.textSecondary,
    maxWidth: 520,
  },

  photoPlaceholder: {
    width: { xs: '100%', md: 320 },
    height: { xs: 280, md: 420 },
    flexShrink: 0,
    borderRadius: 3,
    backgroundColor: COLOR_TOKENS.backgroundElevated,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  photoPlaceholderLabel: {
    ...monoUppercase,
    color: COLOR_TOKENS.textDisabled,
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
  },

  languagesSection: {
    mb: { xs: 6, md: 10 },
  },

  sectionLabel: {
    ...monoUppercase,
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    color: COLOR_TOKENS.textDisabled,
    mb: 2,
  },

  languagesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },

  languageChip: {
    px: 2.5,
    py: 1,
    border: `1px solid ${COLOR_TOKENS.borderDefault}`,
    borderRadius: 2,
    fontSize: '0.85rem',
    color: COLOR_TOKENS.textSecondary,
    fontWeight: 500,
    backgroundColor: COLOR_TOKENS.backgroundPaper,
  },

  navSection: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    gap: 3,
    pt: 4,
    borderTop: `1px solid ${COLOR_TOKENS.borderSubtle}`,
  },

  brandBox: {
    ...monoUppercase,
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    color: COLOR_TOKENS.textDisabled,
    border: `1px solid ${COLOR_TOKENS.borderSubtle}`,
    px: 1.5,
    py: 1,
    borderRadius: 1,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
};
