import { CaseReducer, PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import stepsCounterSlice from '../features/steps-counter/steps-counter.slice';
import jobsFilterSlice from '../features/reducers/job-filter/jobs-filter.slice';
import jobsSlice from '../features/reducers/jobs/jobs.slice';
import { SLICE_NAMES } from '../features/slice-names.enum';
import jobDetailsSlice from '../features/reducers/job-details/job-details.slice';
import userProfileSlice from '../features/reducers/user-details/user-details.slice';
import selectedCitySlice from '../features/reducers/selected-city/selected-city.slice';

const setTestValueReducer: CaseReducer<number, PayloadAction<number>>
  = (state: number, action: PayloadAction<number>) => {
    ('in this');
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
  [SLICE_NAMES.JOB_DETAILS]: jobDetailsSlice,
  [SLICE_NAMES.USER_DETAILS]: userProfileSlice,
  [SLICE_NAMES.SELECTED_CITY]: selectedCitySlice,
  test: testSlice.reducer
  // Add the other reducers here
});

export default rootReducer;
