import { apiSlice } from "../../apiSlice";
import { formDetails } from "./formDetails.interface";
const interviewSchedule = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        interviewScheduleApi:builder.mutation<[],formDetails>({
            query:(formDetails)=>({
                url:`/Interview/Schedule`,
                transformResponse:console.log(formDetails,'formsdetails'),
                headers:{
                    "Content-Type":"application/json"
                },
                method:"POST",
                body:formDetails
            }),
            invalidatesTags:["User"]
        }),
        getInterviewSchedule:builder.query({
            query: () => `/Interview/getInterviewByUserIdJobId?userId=6&jobId=41`,
            providesTags:['User']

        }),
        deleteInterviewSchedule:builder.mutation({
            query:(interviewScheduleId)=>({
              
                transformResponse:console.log(interviewScheduleId,'formsdetails'),
                url:`/Interview/DleteSchedule/${interviewScheduleId}`,
                headers:{
                    "Content-Type":"application/json"
                },
                method:"DELETE",
               

            }),
            invalidatesTags:['User']
        })
    })
})

export const {useInterviewScheduleApiMutation,useDeleteInterviewScheduleMutation,useGetInterviewScheduleQuery} = interviewSchedule

export default interviewSchedule