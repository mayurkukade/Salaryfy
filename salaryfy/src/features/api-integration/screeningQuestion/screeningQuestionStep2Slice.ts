import { apiSlice } from "../../apiSlice";
import { ScreeningData } from "./screening.model.interface";

const screeningQuestionsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScreeningQuestion: builder.query({
      // query: (id) => `/JobFair/getJobFairDetailsByJobId?jobId=${id}`,
      query: () => `/JobFair/getJobFairDetailsByJobId?jobId=1`,
    }),
    postScreeningQuestionSlice :builder.mutation<[object],ScreeningData>({
      query: (filteredData) => ({
        url: `/jobFairQueAns/saveAllJobFairques`,
        transformResponse: console.log('From api sli of screening question',filteredData),
        headers:{
          "Content-Type":"application/json"
        },
        method: "POST",
        body: filteredData,
      }),
      invalidatesTags: ["User"],
    })
  }),
});

export const { useGetScreeningQuestionQuery, usePostScreeningQuestionSliceMutation } = screeningQuestionsSlice;

export default screeningQuestionsSlice;
