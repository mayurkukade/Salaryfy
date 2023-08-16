import { combineReducers } from '@reduxjs/toolkit';
import stepsCounterSlice from '../features/steps-counter/steps-counter.slice';
import SLICE_NAMES from '../features/slice-names.enum';
const rootReducer = combineReducers({
  [SLICE_NAMES.STEPS_COUNTER]: stepsCounterSlice,
  // Add the other reducers here
});

export default rootReducer;
