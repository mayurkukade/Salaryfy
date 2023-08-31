
import { apiSlice } from '../../apiSlice';
const profileQualificationSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (userId: string) => `/profileLevel/getByUserId?userId=${userId}`,
      providesTags: ['get-profile-qualiication']
    }),
    saveProfile: builder.mutation({
      query: (payload) => ({
        url: '/profileLevel/save',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['get-profile-qualiication']
    })
  }),
});

export const { useLazyGetProfileQuery, useSaveProfileMutation } = profileQualificationSlice;

export default profileQualificationSlice;

