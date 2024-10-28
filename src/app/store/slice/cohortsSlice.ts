import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cohort {
  id: number;
  name: string;
  description: string;
  program: string;
  startDate: string;
  endDate: string;
  avatar: string | null;
}

interface CohortsState {
  cohorts: Cohort[];
}

const initialState: CohortsState = {
  cohorts: [],
};

const cohortsSlice = createSlice({
  name: 'cohorts',
  initialState,
  reducers: {
    addCohort: (state, action: PayloadAction<Cohort>) => {
      state.cohorts.push(action.payload);
    },
  },
});

export const { addCohort } = cohortsSlice.actions;

export default cohortsSlice.reducer;
