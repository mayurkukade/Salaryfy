
import { apiSlice } from '../../apiSlice';
const jobSearchSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({
    getJobsSearch: builder.query({
      query: ({ searchInput = '', sortField = 'companyName' }: { searchInput?: string, sortField?: string }) => {
        console.log('placement: ', { searchInput, sortField });
        return `jobs/searchBarFilterSort?searchBarInput=${searchInput}&sortField=${sortField}&sortDirection=asc`
      },
      providesTags: ['jobs-keyword-search']
    }),
    getJobsFilter: builder.query({
      query: (properties: string) => `jobs/mainFilter?${properties}`,
      providesTags: ['jobs-filter']
    }),
    getJobById: builder.query({
      query: (id: string) => `/job/getJob?JobId=${id}`,
      providesTags: ['job-id']
    }),
    getRecommendedJobs: builder.query({
      query: (postName: string = '', location: string = '') => `/jobs/jobSuggest?postName=${postName}&location=${location}`,
      providesTags: ['jobs-recommended']
    }),
  }),
});

export const { useLazyGetJobsSearchQuery, useLazyGetJobsFilterQuery, useLazyGetJobByIdQuery, useLazyGetRecommendedJobsQuery } = jobSearchSlice;

export default jobSearchSlice;

