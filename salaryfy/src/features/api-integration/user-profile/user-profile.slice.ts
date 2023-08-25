import { apiSlice } from '../../apiSlice';
const userProfileApiSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id: string) => `/user/getById?userId=${id}`,
      providesTags: ['user-id']
    })
  }),
});

export const { useLazyGetUserByIdQuery } = userProfileApiSlice;

export default userProfileApiSlice.reducerPath;

