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
        })
    })
})

export const {usePostJobsMutation} = adminApiSlice

export default adminApiSlice.reducerPath