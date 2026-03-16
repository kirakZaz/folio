import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/testUtils';
import Assessment1Page from './Assessment1Page';

describe('Assessment1Page', () => {
  it('renders the page title', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    // The h1 heading is distinct from the nav link with the same text
    expect(screen.getByRole('heading', { level: 1, name: 'Assessment 1' })).toBeInTheDocument();
  });

  it('renders the assessment subtitle', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Research & Personal Brand Positioning')).toBeInTheDocument();
  });

  it('renders all four section placeholders', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByTestId('section-placeholder-1')).toBeInTheDocument();
    expect(screen.getByTestId('section-placeholder-2')).toBeInTheDocument();
    expect(screen.getByTestId('section-placeholder-3')).toBeInTheDocument();
    expect(screen.getByTestId('section-placeholder-4')).toBeInTheDocument();
  });

  it('renders the Personal Visual Exploration section', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Personal Visual Exploration')).toBeInTheDocument();
  });

  it('renders the Research Work Opportunities section', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Research Work Opportunities')).toBeInTheDocument();
  });

  it('renders the Creative Professionals section', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('How Creative Professionals Present Themselves')).toBeInTheDocument();
  });

  it('renders the Professional Statement section', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Professional Statement')).toBeInTheDocument();
  });

  it('renders both full and short statement placeholders', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Full Version — Portfolio, Resume & LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Short Version — Social Media')).toBeInTheDocument();
  });

  it('renders the nav bar on the assessment page', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByTestId('app-nav-bar')).toBeInTheDocument();
  });

  it('renders a back navigation button', () => {
    renderWithProviders(<Assessment1Page />, { initialPath: '/assessment-1' });
    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
