import type { ReactNode } from 'react';

export interface ContentWrapperProps {
  children: ReactNode;
  /** Pass true on pages that are rendered inside PortfolioLayout (sidebar present).
   *  Content will fill the available width without an extra centering constraint.
   *  Default (false): content is centered with maxWidth 1100px. */
  withSidebar?: boolean;
}
