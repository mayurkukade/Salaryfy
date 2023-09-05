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
            query: ({userId,jobId}) =>({
                url: `/Interview/getInterviewByUserIdJobId?userId=${userId}&jobId=${jobId}`,
                transformResponse:console.log(userId,jobId),
                headers:{
                    "Content-Type":"application/json"
                },
                method:"GET",
            }),

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