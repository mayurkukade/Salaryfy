import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { JobType } from "./jobs.interface";


const setJobsReducer: CaseReducer<Array<JobType>, PayloadAction<Array<JobType>>>
  = (state: Array<JobType>, action: PayloadAction<Array<JobType>>) => {
    state = action.payload;
    return state;
};

export default setJobsReducer;