import { createSlice } from '@reduxjs/toolkit';
import SLICE_NAMES from '../../slice-names.enum';
import setJobFilterReducer from './jobs-filter.reducer';
import { JobsFilterType } from './jobs-filter.interface';

/**
 * Initial state for the steps counter.
 */
const initialState: JobsFilterType = {
  locations: [{ option: 'hello', selected: false }],
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
