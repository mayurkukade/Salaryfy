import { createSlice } from '@reduxjs/toolkit';
import setJobFilterReducer from './jobs-filter.reducer';
import { JobsFilterType } from './jobs-filter.interface';
import { SLICE_NAMES } from '../../slice-names.enum';

/**
 * Initial state for the steps counter.
 */
const initialState: JobsFilterType = {
  locations: [],
  jobTypes: [],
  companyNames: []
};

const jobsFilterSlice = createSlice({
  name: SLICE_NAMES.JOBS_FILTER,
  initialState,
  reducers: {
    setJobFilter: setJobFilterReducer,
  },
});

export const { setJobFilter } = jobsFilterSlice.actions;

export default jobsFilterSlice.reducer;
