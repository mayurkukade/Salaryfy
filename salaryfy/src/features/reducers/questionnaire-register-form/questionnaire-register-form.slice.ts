import { createSlice } from "@reduxjs/toolkit";
import {questionnaireRegisterForm} from './questionnaire-register-form.interface'
import { PayloadAction } from "@reduxjs/toolkit";

    const initialState:questionnaireRegisterForm ={
    registerFormData : []
}

const questionnarieFormSLice = createSlice({
    name:'registerFormSlice',
    initialState,
    reducers:{
        registerFormQuestionnaire:(state,action:PayloadAction<string>)=>{
                state.registerFormData.push(action.payload)
                console.log(action.payload)
        }
    }
})



export const {registerFormQuestionnaire} = questionnarieFormSLice.actions
export default questionnarieFormSLice.reducer