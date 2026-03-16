import { configureStore } from '@reduxjs/toolkit';
import assessmentsReducer from '@/features/assessments/assessmentsSlice';

export const store = configureStore({
  reducer: {
    assessments: assessmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
