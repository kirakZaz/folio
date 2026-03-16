import { createSlice } from '@reduxjs/toolkit';

import { ASSESSMENTS_DATA } from '@/shared/constants/assessments.constants';
import type { Assessment } from '@/shared/types/assessment.types';
import type { RootState } from '@/app/store';

interface AssessmentsState {
  assessments: Assessment[];
}

const initialState: AssessmentsState = {
  assessments: ASSESSMENTS_DATA,
};

export const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {},
});

export const selectAllAssessments = (state: RootState): Assessment[] =>
  state.assessments.assessments;

export const selectAssessmentById =
  (id: number) =>
  (state: RootState): Assessment | undefined =>
    state.assessments.assessments.find((assessment) => assessment.id === id);

export default assessmentsSlice.reducer;
