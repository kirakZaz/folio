import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

import { store } from '@/app/store';
import { appTheme } from '@/theme/theme';
import { COLOR_TOKENS } from '@/theme/themeTokens';

const gridBackground = `
  linear-gradient(${COLOR_TOKENS.borderSubtle} 0.5px, transparent 0.5px),
  linear-gradient(90deg, ${COLOR_TOKENS.borderSubtle} 0.5px, transparent 0.5px),
  radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)
`;

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        backgroundImage: gridBackground,
        backgroundSize: '32px 32px',
        backgroundAttachment: 'fixed',
        opacity: 1,
      },
    }}
  />
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          {globalStyles}
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
