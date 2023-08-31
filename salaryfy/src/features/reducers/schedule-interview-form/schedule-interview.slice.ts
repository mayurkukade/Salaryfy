import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { interviewSchedule } from "./schedule-interview.interface";
const initialState: interviewSchedule = {
    scheduleInterviewForms:[]
};


const scheduleInterviewFormSlice = createSlice({
    name:'scheduleInterviewForm',
    initialState,
    reducers:{
            
            arrayFormScheduleInterview:(state,action:PayloadAction<string>)=>{
                state.scheduleInterviewForms.push(action.payload)
                console.log(action.payload)
        }
    }
})

export const {arrayFormScheduleInterview} = scheduleInterviewFormSlice.actions
export default scheduleInterviewFormSlice.reducer