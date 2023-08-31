import { apiSlice } from '../../apiSlice';
const userProfileApiSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id: string) => `/user/getById?userId=${id}`,
      providesTags: ['user-id']
    }),
    uploadFile: builder.mutation({
      query: (imageFormData: FormData) => ({
        url: `/uploadFile/add`,
        method: 'POST',
        body: imageFormData
      }),
      invalidatesTags: ['user-resume']
    }),
    getUploadedFiles: builder.query({
      query: (id: string) => `/uploadFile/getByUserId?userId=${id}`,
      providesTags: ['user-files']
    }),

  }),
});

export const { useLazyGetUserByIdQuery, useUploadFileMutation, useLazyGetUploadedFilesQuery } = userProfileApiSlice;

export default userProfileApiSlice.reducerPath;

