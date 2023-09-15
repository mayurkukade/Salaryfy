import { createSlice } from "@reduxjs/toolkit";
import { screeningQuestionInterface } from "./screening-question.interface";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: screeningQuestionInterface = {
  screeningQuestionValue: 0,
  screeningQuestionResponse: [],
};

const screeningQuestionFormSlice = createSlice({
  name: "screeningQuestionSlice",
  initialState,
  reducers: {
    screeningQuestionValidation: (state,action:PayloadAction<number>) => {
      state.screeningQuestionValue += action.payload;
    },
    screeningQuestionData:(state, action:PayloadAction<string>)=>{
      state.screeningQuestionResponse.push(action.payload)
    }
  },
});

export const { screeningQuestionValidation,screeningQuestionData } = screeningQuestionFormSlice.actions;
export default screeningQuestionFormSlice.reducer;
