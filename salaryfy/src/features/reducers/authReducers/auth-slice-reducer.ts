import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    token:string | null,
    userName:string | null,
    userId:number|string | null
}
const initialState:AuthState ={
    token :null,
    userName:null,
    userId:null
}

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setToken : (state,action: PayloadAction<string>) =>{
            state.token = action.payload
        },
        clearToken:(state) =>{
            state.token = null
        },
        userNameSelection:(state,action: PayloadAction<string>) =>{
            state.userName = action.payload
           
        },
        userIdSelection:(state,action:PayloadAction<string>) =>{
            state.userId = action.payload
        }
       
    }
})

export const {setToken,clearToken} = authSlice.actions
export default authSlice.reducer