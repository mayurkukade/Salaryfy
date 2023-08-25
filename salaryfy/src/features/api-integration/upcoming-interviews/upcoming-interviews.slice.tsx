
import { apiSlice } from '../../apiSlice';
const upcomingInterviewSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getUpcomingInterviews: builder.query({
      query: (userId: string) => `/Interview/getInterviewByUserId?userId=${userId}`,
      providesTags: ['upcoming-interviews']
    }),
  }),
});

export const { useLazyGetUpcomingInterviewsQuery } = upcomingInterviewSlice;

export default upcomingInterviewSlice;

