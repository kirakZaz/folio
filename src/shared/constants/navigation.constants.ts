import { ROUTES } from './routes.constants';

export interface NavItem {
  label: string;
  route: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Welcome', route: ROUTES.HOME },
  { label: 'Experience', route: ROUTES.EXPERIENCE },
  { label: 'Projects', route: ROUTES.PROJECTS },
  { label: 'About me', route: ROUTES.ABOUT },
  { label: 'Degree', route: ROUTES.JOURNEY },
  { label: 'Art', route: ROUTES.ART },
  { label: 'Resume', route: ROUTES.RESUME },
] as const;

export const NAV_ITEMS_INNER: readonly NavItem[] = NAV_ITEMS.filter(
  (item) => item.route !== ROUTES.HOME,
);
