import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { JobsDetailsType } from "./job-details.interface";

export const setJobDetailsReducer: CaseReducer<JobsDetailsType, PayloadAction<JobsDetailsType>>
  = (state: JobsDetailsType, action: PayloadAction<JobsDetailsType>) => {
    return { ...state, ...action.payload };
};