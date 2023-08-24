import exp from "constants";
import { apiSlice } from "../../apiSlice";



 const ScreeningQuestionsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getAllJobFairDetails: builder.query({
        query: (pageNo) => `getAllJobFairDetails?pageNo=${pageNo}`,
      }),
    }),
  });



  export const{
    useGetAllJobFairDetailsQuery,
  } = ScreeningQuestionsSlice;