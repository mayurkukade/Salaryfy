
import { apiSlice } from '../../apiSlice';
const jobSearchSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getJobsSearch: builder.query({
      query: (searchInput: string) => `jobs/searchBarFilter?searchBarInput=${searchInput}`,
      providesTags: ['Jobs']
    }),
    getJobsFilter: builder.query({
      query: (properties: string) => `jobs/mainFilter?${properties}`,
      providesTags: ['jobs-filter']
    })
  }),
});

export const { useLazyGetJobsSearchQuery, useLazyGetJobsFilterQuery } = jobSearchSlice;

export default jobSearchSlice;

