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
            invalidatesTags:["interview-schedule"]
        }),
        getInterviewSchedule:builder.query({
            query: ({userId,jobId}) =>({
                url: `/Interview/getInterviewByUserIdJobId?userId=${userId}&jobId=${jobId}`,
                transformResponse:console.log(userId,jobId),
               
                method:"GET",
            }),
            
            providesTags:['interview-schedule']

        }),
        deleteInterviewSchedule:builder.mutation({
            query:(interviewScheduleId)=>({
              
                transformResponse:console.log(interviewScheduleId),
                url:`/Interview/DleteSchedule/${interviewScheduleId}`,
             
                method:"DELETE",
               

            }),
            invalidatesTags:['interview-schedule']
        })
    })
})

export const {useInterviewScheduleApiMutation,useDeleteInterviewScheduleMutation,useGetInterviewScheduleQuery} = interviewSchedule

export default interviewSchedule