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
    getUserSkills: builder.query({
      query: (id: string) => `userSkill/getByUserId?UserId=${id}`,
      providesTags: ['get-user-skills']
    }),
    setUserSkills: builder.mutation({
      query: (userSkills: { userSkill: string, userId: string }) => ({
        url: `userSkill/add`,
        method: 'POST',
        body: userSkills
      }),
      invalidatesTags: ['set-user-skills']
    }),
    getUserProfilePhoto:builder.query({
      query: (userId:number) => `/uploadFile/getDocuments?userId=${userId}&DocumentType=PPHOTO`,

      providesTags: ['user-files','user-resume']
    })

  }),
});

export const { useLazyGetUserByIdQuery,useGetUserProfilePhotoQuery,useGetUploadedFilesQuery ,useUploadFileMutation, useLazyGetUploadedFilesQuery, useLazyGetUserSkillsQuery, useSetUserSkillsMutation } = userProfileApiSlice;

export default userProfileApiSlice.reducerPath;

