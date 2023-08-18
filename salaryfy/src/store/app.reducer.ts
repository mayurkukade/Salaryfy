import { combineReducers } from '@reduxjs/toolkit';
import stepsCounterSlice from '../features/steps-counter/steps-counter.slice';
import jobsFilterSlice from '../features/reducers/job-filter/jobs-filter.slice';
import SLICE_NAMES from '../features/slice-names.enum';
const rootReducer = combineReducers({
  [SLICE_NAMES.STEPS_COUNTER]: stepsCounterSlice,
  [SLICE_NAMES.JOBS_FILTER]: jobsFilterSlice
  // Add the other reducers here
});

export default rootReducer;
