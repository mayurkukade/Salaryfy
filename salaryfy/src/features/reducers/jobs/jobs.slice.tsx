import { createSlice } from '@reduxjs/toolkit';
import { JobType } from './jobs.interface';
import setJobsReducer from './jobs.reducer';
import { SLICE_NAMES } from '../../slice-names.enum';

/**
 * Initial state for the steps counter.
 */
const initialState: Array<JobType> = [];

const jobsSlice = createSlice({
  name: SLICE_NAMES.JOBS_FILTER,
  initialState,
  reducers: {
    setJobs: setJobsReducer,
  },
});

export const { setJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
