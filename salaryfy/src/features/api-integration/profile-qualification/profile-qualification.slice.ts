
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
    }),
    universitySuggestions: builder.query({
      query: (userInput: string) => `/ESuggest/get-suggestions?userInput=${encodeURIComponent(userInput)}&education=Graduation`,
      providesTags: ['get-universities']
    })
  }),
});

export const { useLazyGetProfileQuery, useSaveProfileMutation, useLazyUniversitySuggestionsQuery } = profileQualificationSlice;

export default profileQualificationSlice;

