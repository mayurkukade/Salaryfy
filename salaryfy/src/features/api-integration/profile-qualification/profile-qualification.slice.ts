
import { apiSlice } from '../../apiSlice';
const profileQualificationSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (userId: string) => `/profileLevel/getByUserId?userId=${userId}`,
      providesTags: ['get-profile-qualiication']
    })
  }),
});

export const { useLazyGetProfileQuery } = profileQualificationSlice;

export default profileQualificationSlice;

