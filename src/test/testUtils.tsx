import React from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import assessmentsReducer from '@/features/assessments/assessmentsSlice';
import { appTheme } from '@/theme/theme';

const buildTestStore = () =>
  configureStore({
    reducer: {
      assessments: assessmentsReducer,
    },
  });

const buildTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
    },
  });

interface TestWrapperProps {
  children: React.ReactNode;
  initialPath?: string;
}

const TestWrapper = ({ children, initialPath = '/' }: TestWrapperProps) => {
  const testStore = buildTestStore();
  const testQueryClient = buildTestQueryClient();

  return (
    <ReduxProvider store={testStore}>
      <QueryClientProvider client={testQueryClient}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <MemoryRouter initialEntries={[initialPath]}>{children}</MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialPath?: string;
}

const renderWithProviders = (
  ui: React.ReactElement,
  { initialPath, ...renderOptions }: CustomRenderOptions = {},
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <TestWrapper initialPath={initialPath}>{children}</TestWrapper>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export { renderWithProviders };
export { screen, fireEvent, waitFor, within } from '@testing-library/react';
export { userEvent } from '@testing-library/user-event';
