import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { JobsFilterType } from './jobs-filter.interface';

const setJobFilterReducer: CaseReducer<JobsFilterType, PayloadAction<JobsFilterType>>
  = (state: JobsFilterType, action: PayloadAction<JobsFilterType>) => {
    return { ...state, ...action.payload };
};

export default setJobFilterReducer;