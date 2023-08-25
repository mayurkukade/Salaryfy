import { apiSlice } from "../../apiSlice";

const screeningQuestionsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScreeningQuestion: builder.query<any, void>({
      query: () => `/JobFair/getJobFairDetailsByJobId?jobId=1`,
    }),
  }),
});

export const { useGetScreeningQuestionQuery } = screeningQuestionsSlice;

export default screeningQuestionsSlice;
