import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/testUtils';
import SectionPlaceholder from './SectionPlaceholder';

describe('SectionPlaceholder', () => {
  it('renders the section title', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={1} title="Personal Visual Exploration" description="Create mood boards." />,
    );
    expect(screen.getByText('Personal Visual Exploration')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={1} title="Test" description="Create mood boards." />,
    );
    expect(screen.getByText('Create mood boards.')).toBeInTheDocument();
  });

  it('renders the Placeholder chip', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={1} title="Test" description="Test" />,
    );
    expect(screen.getByText('Placeholder')).toBeInTheDocument();
  });

  it('renders with a data-testid based on section number', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={3} title="Test" description="Test" />,
    );
    expect(screen.getByTestId('section-placeholder-3')).toBeInTheDocument();
  });

  it('renders custom children instead of the default placeholder box', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={1} title="Test" description="Test">
        <div data-testid="custom-content">Custom content</div>
      </SectionPlaceholder>,
    );
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });

  it('formats single-digit section number with a leading zero', () => {
    renderWithProviders(
      <SectionPlaceholder sectionNumber={1} title="Test" description="Test" />,
    );
    expect(screen.getByText('01')).toBeInTheDocument();
  });
});
