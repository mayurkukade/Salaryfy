import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { interviewSchedule } from "./schedule-interview.interface";
const initialState: interviewSchedule = {
    scheduleInterviewForms:[],
    nextButtonFlag:undefined,
    isOpen:false
};


const scheduleInterviewFormSlice = createSlice({
    name:'scheduleInterviewForm',
    initialState,
    reducers:{
            
            arrayFormScheduleInterview:(state,action:PayloadAction<string>)=>{
                state.scheduleInterviewForms.push(action.payload)
                (action.payload)
        },
        nextButtonFlag:(state,action:PayloadAction<undefined>)=>{
                state.nextButtonFlag = action.payload
        },
        openModel:(state)=>{
            state.isOpen = true
        },
        closeModel:(state)=>{
            state.isOpen = false
        }
    }
})

export const {arrayFormScheduleInterview,nextButtonFlag,openModel,closeModel} = scheduleInterviewFormSlice.actions
export default scheduleInterviewFormSlice.reducer