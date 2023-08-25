import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface currentRouteState{
    currentRoute:string | null
}

const initialState:currentRouteState = {
    currentRoute : '45'
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