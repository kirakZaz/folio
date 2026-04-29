export type ContactLink =
  | { label: string; icon: string; href: string; tooltip: string; copyValue?: never }
  | { label: string; icon: string; href?: never; tooltip: string; copyValue: string };

export const CONTACT_LINKS: ContactLink[] = [
  {
    label:   'LinkedIn',
    icon:    '/icons/linkedin.png',
    href:    'https://www.linkedin.com/in/kira-zakirova-4bbb04a9/',
    tooltip: 'Go to the account',
  },
  {
    label:   'GitHub',
    icon:    '/icons/github-142-svgrepo-com.svg',
    href:    'https://github.com/kirakZaz',
    tooltip: 'Go to the account',
  },
  {
    label:      'Email',
    icon:       '/icons/email.svg',
    copyValue:  'kirza.zaz@gmail.com',
    tooltip:    'Copy email',
  },
];
