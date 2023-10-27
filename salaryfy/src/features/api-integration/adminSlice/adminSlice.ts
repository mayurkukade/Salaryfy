import { apiSlice } from "../../apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        postJobs:builder.mutation({
            query:(inputStateJobPost)=>({
                url:`job/update/36`,
                method:'POST',
                body:inputStateJobPost
            }),
            invalidatesTags:['job-post']
        }),
        
    getJobLocation: builder.query({
      query: () => `/job/GetLocation`,
      providesTags: ["jobs-lnjtcn"]
    }),
    })
})

export const {usePostJobsMutation,useGetJobLocationQuery} = adminApiSlice

export default adminApiSlice.reducerPath