import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders, screen, fireEvent } from '@/test/testUtils';
import AssessmentCard from './AssessmentCard';
import type { Assessment } from '@/features/assessments/types';

// vi.mock is hoisted to the top of the file by Vitest, so mockNavigate must
// be created with vi.hoisted to be available inside the factory function.
const mockNavigate = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

const mockAvailableAssessment: Assessment = {
  id: 1,
  title: 'Assessment 1',
  subtitle: 'Research & Personal Brand Positioning',
  description: 'Test description for assessment 1.',
  status: 'available',
  route: '/assessment-1',
  weight: '20%',
  dueModule: 'Module 3',
};

const mockComingSoonAssessment: Assessment = {
  id: 2,
  title: 'Assessment 2',
  subtitle: 'Portfolio Teaser & Cover Letter',
  description: 'Test description for assessment 2.',
  status: 'coming_soon',
  route: '/assessment-2',
  weight: '30%',
  dueModule: 'Module 6',
};

describe('AssessmentCard', () => {
  it('renders the assessment title', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('Assessment 1')).toBeInTheDocument();
  });

  it('renders the assessment subtitle', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('Research & Personal Brand Positioning')).toBeInTheDocument();
  });

  it('renders the assessment description', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('Test description for assessment 1.')).toBeInTheDocument();
  });

  it('renders "Available" chip for available assessments', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('renders "Coming Soon" chip for coming_soon assessments', () => {
    renderWithProviders(<AssessmentCard assessment={mockComingSoonAssessment} />);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });

  it('renders a "View" action for available assessments', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('View')).toBeInTheDocument();
  });

  it('does not render a "View" action for coming_soon assessments', () => {
    renderWithProviders(<AssessmentCard assessment={mockComingSoonAssessment} />);
    expect(screen.queryByText('View')).not.toBeInTheDocument();
  });

  it('calls navigate with the correct route when an available card is clicked', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    const cardActionArea = screen.getByTestId('assessment-card-1').querySelector('button');
    if (cardActionArea) {
      fireEvent.click(cardActionArea);
    }
    expect(mockNavigate).toHaveBeenCalledWith('/assessment-1');
  });

  it('renders weight and due module information', () => {
    renderWithProviders(<AssessmentCard assessment={mockAvailableAssessment} />);
    expect(screen.getByText('20% · Module 3')).toBeInTheDocument();
  });
});
