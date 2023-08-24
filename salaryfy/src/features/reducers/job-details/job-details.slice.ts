import { createSlice } from '@reduxjs/toolkit';
import { JobsDetailsType } from './job-details.interface';
import { setJobDetailsReducer } from './job-details.reducer';
import { SLICE_NAMES } from '../../slice-names.enum';

/**
 * Initial state for the job details.
 */
const initialState: JobsDetailsType = {
  companyName: "Company Name",
  date: "date here",
  essentialRequirements: "Essential requirements here",
  incentives: "Incentives here",
  interviewDetails: "Interview details here",
  interviewEndDate: "start date of an interview",
  interviewStartDate: "last date of an interview",
  jobDetails: "Job details here",
  jobFairSetNo: NaN,
  jobId: NaN,
  jobType: "Job type",
  location: "location",
  logo: "logo link here",
  noOfPosts: NaN,
  postName: "Post Name here",
  startingSalary: "Salary here",
  status: false,
  user_Id: NaN
};

const jobDetailsSlice = createSlice({
  name: SLICE_NAMES.JOB_DETAILS,
  initialState,
  reducers: {
    setJobDetails: setJobDetailsReducer,
  },
});

export const { setJobDetails } = jobDetailsSlice.actions;

export default jobDetailsSlice.reducer;
