import { CaseReducer, PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import stepsCounterSlice from '../features/steps-counter/steps-counter.slice';
import jobsFilterSlice from '../features/reducers/job-filter/jobs-filter.slice';
import jobsSlice from '../features/reducers/jobs/jobs.slice';
import { SLICE_NAMES } from '../features/slice-names.enum';

const setTestValueReducer: CaseReducer<number, PayloadAction<number>>
  = (state: number, action: PayloadAction<number>) => {
    console.log('in this');
    state = action.payload;
    return state;
};

export const testSlice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    setValue: setTestValueReducer,
  },
});

const rootReducer = combineReducers({
  [SLICE_NAMES.STEPS_COUNTER]: stepsCounterSlice,
  [SLICE_NAMES.JOBS_FILTER]: jobsFilterSlice,
  [SLICE_NAMES.JOBS]: jobsSlice,
  test: testSlice.reducer
  // Add the other reducers here
});

export default rootReducer;
