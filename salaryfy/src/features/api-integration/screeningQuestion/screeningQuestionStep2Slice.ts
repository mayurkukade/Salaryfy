import { apiSlice } from "../../apiSlice";

const screeningQuestionsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScreeningQuestion: builder.query({
      query: (id) => `/JobFair/getJobFairDetailsByJobId?jobId=${id}`,
   
    }),
    postScreeningQuestionSlice :builder.mutation<[object],any>({
      query: (filteredData) => ({
        url: `/jobFairQueAns/saveAllJobFairques`,
        //transformResponse: console.log('From api sli of screening question',filteredData),
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
