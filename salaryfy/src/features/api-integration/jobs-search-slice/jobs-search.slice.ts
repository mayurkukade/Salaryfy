import { apiSlice } from "../../apiSlice";
const jobSearchSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobsSearch: builder.query({
      query: (searchInput: string) =>
        `jobs/searchBarFilter?searchBarInput=${searchInput}`,
      providesTags: ["Jobs"],
    }),
    getJobsFilter: builder.query({
      query: (properties: string) => `jobs/mainFilter?${properties}`,
      providesTags: ["jobs-filter"],
    }),
    getJobById: builder.query({
      query: (id: string) => `/job/getJob?JobId=${id}`,
      providesTags: ["job-id"],
    }),
    getRecommendedJobs: builder.query({
      query: (postName: string = "", location: string = "") =>
        `/jobs/jobSuggest?postName=${postName}&location=${location}`,
      providesTags: ["jobs-recommended"],
    }),
    getPlacementDetailsPDF: builder.query({
      query: () => `/pdf/generate/36`,
     
      providesTags: ["job-id"],
    }),
  }),
});

export const {
  useLazyGetJobsSearchQuery,
  useLazyGetJobsFilterQuery,
  useLazyGetJobByIdQuery,
  useLazyGetRecommendedJobsQuery,
  useGetPlacementDetailsPDFQuery
} = jobSearchSlice;

export default jobSearchSlice;
