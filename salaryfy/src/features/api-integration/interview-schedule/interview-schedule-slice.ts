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
        })
    })
})

export const {useInterviewScheduleApiMutation} = interviewSchedule

export default interviewSchedule