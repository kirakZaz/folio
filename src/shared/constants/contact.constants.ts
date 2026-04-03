export type ContactLink =
  | { label: string; href: string; tooltip: string; copyValue?: never }
  | { label: string; href?: never; tooltip: string; copyValue: string };

export const CONTACT_LINKS: ContactLink[] = [
  {
    label:   'LinkedIn',
    href:    'https://www.linkedin.com/in/kira-zakirova-4bbb04a9/',
    tooltip: 'Go to the account',
  },
  {
    label:   'GitHub',
    href:    'https://github.com/kirakZaz',
    tooltip: 'Go to the account',
  },
  {
    label:      'Email',
    copyValue:  'kirza.zaz@gmail.com',
    tooltip:    'Copy email',
  },
];
