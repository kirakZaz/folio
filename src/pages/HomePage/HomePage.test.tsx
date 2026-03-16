import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/testUtils';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the main greeting', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText("Hi, I'm Kira.")).toBeInTheDocument();
  });

  it('renders the professional subtitle', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Software Developer & Game Design Student.')).toBeInTheDocument();
  });

  it('renders all three assessment cards', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByTestId('assessment-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('assessment-card-2')).toBeInTheDocument();
    expect(screen.getByTestId('assessment-card-3')).toBeInTheDocument();
  });

  it('renders the Journey section label', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Journey')).toBeInTheDocument();
  });

  it('renders the Handmade Bags carousel section', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Handmade Bags')).toBeInTheDocument();
  });

  it('renders Assessment 1 as available', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('renders Assessment 2 and 3 as coming soon', () => {
    renderWithProviders(<HomePage />);
    const comingSoonChips = screen.getAllByText('Coming Soon');
    expect(comingSoonChips).toHaveLength(2);
  });

  it('does NOT render the nav bar on the home page', () => {
    renderWithProviders(<HomePage />);
    expect(screen.queryByTestId('app-nav-bar')).not.toBeInTheDocument();
  });
});
