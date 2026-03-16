import { describe, it, expect } from 'vitest';
import assessmentsReducer, {
  selectAllAssessments,
  selectAssessmentById,
} from './assessmentsSlice';
import type { RootState } from '@/app/store';

const buildMockRootState = (): RootState => ({
  assessments: assessmentsReducer(undefined, { type: '@@INIT' }),
});

describe('assessmentsSlice', () => {
  describe('reducer', () => {
    it('returns the initial state with three assessments', () => {
      const state = assessmentsReducer(undefined, { type: '@@INIT' });
      expect(state.assessments).toHaveLength(3);
    });

    it('has Assessment 1 with status available', () => {
      const state = assessmentsReducer(undefined, { type: '@@INIT' });
      expect(state.assessments[0].status).toBe('available');
    });

    it('has Assessment 2 and 3 with status coming_soon', () => {
      const state = assessmentsReducer(undefined, { type: '@@INIT' });
      expect(state.assessments[1].status).toBe('coming_soon');
      expect(state.assessments[2].status).toBe('coming_soon');
    });
  });

  describe('selectAllAssessments', () => {
    it('returns all three assessments', () => {
      const assessments = selectAllAssessments(buildMockRootState());
      expect(assessments).toHaveLength(3);
    });

    it('returns assessments with correct titles', () => {
      const assessments = selectAllAssessments(buildMockRootState());
      expect(assessments[0].title).toBe('Assessment 1');
      expect(assessments[1].title).toBe('Assessment 2');
      expect(assessments[2].title).toBe('Assessment 3');
    });
  });

  describe('selectAssessmentById', () => {
    it('returns the correct assessment by id', () => {
      const assessment = selectAssessmentById(1)(buildMockRootState());
      expect(assessment?.title).toBe('Assessment 1');
    });

    it('returns undefined for a non-existent id', () => {
      const assessment = selectAssessmentById(99)(buildMockRootState());
      expect(assessment).toBeUndefined();
    });
  });
});
