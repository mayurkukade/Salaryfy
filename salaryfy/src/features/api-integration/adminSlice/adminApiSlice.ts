import { apiSlice } from "../../apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        postJobs:builder.mutation<unknown,unknown>({
            query:(inputStateJobPost:unknown)=>({
                url:`job/add`,
                transformResponse:console.log(inputStateJobPost),
                method:'POST',
                body:inputStateJobPost
            }),
            invalidatesTags:['job-post']
        }),
      
    })
})

export const {usePostJobsMutation} = adminApiSlice

export default adminApiSlice