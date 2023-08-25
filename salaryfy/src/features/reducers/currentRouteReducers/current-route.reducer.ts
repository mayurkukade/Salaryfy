import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import { currentRouteState } from "./current-route.interface";


const initialState:currentRouteState = {
    currentRoute : null
}

const currentRoute = createSlice({
    name:'currentRoute',
    initialState,
    reducers:{
        cureentSelector:(state,action: PayloadAction<string>) =>{
           state.currentRoute = action.payload
        }
    }
})

export const {cureentSelector} = currentRoute.actions
export default currentRoute.reducer