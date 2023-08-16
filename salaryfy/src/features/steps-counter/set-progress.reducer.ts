import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import StepsCounterState from "./steps-counter-state.interface";

/**
 * Reducer function to set the progress in the steps counter.
 *
 * @param {StepsCounterState} state - The current state of the steps counter.
 * @param {PayloadAction<[number, number. number]>} action - The action containing the new progress value.
 */
const setProgressReducer: CaseReducer<StepsCounterState, PayloadAction<[number, number, number]>>
  = (state: StepsCounterState, action: PayloadAction<[number, number, number]>) => {
    state.progress = action.payload;
};

export default setProgressReducer;