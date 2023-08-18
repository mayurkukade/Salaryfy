
import { apiSlice } from '../../apiSlice';
const jobSearchSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => `jobs/searchBarFilter?searchBarInput=`,
      providesTags: ['Jobs']
    })
  }),
});

export const { useLazyGetJobsQuery } = jobSearchSlice;

export default jobSearchSlice;

