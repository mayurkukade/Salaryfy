import { createSlice } from '@reduxjs/toolkit';
import StepsCounterState from './steps-counter-state.interface';
import setProgressReducer from './set-progress.reducer';
import SLICE_NAMES from '../slice-names.enum';

/**
 * Initial state for the steps counter.
 */
const initialState: StepsCounterState = {
  progress: [0, 0, 0],
  
};

/**
 * Slice for managing the steps counter state.
 */
const stepsCounterSlice = createSlice({
  name: SLICE_NAMES.STEPS_COUNTER,
  initialState,
  reducers: {
    /**
     * Set the progress to the provided value.
     */
    setProgress: setProgressReducer,
  },
});

/**
 * Action creator for setting the progress in the steps counter.
 */
export const { setProgress } = stepsCounterSlice.actions;

/**
 * Reducer function for the steps counter slice.
 */
export default stepsCounterSlice.reducer;
