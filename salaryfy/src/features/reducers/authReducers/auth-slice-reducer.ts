import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    token: string | null | object;
    userName: string[];
    userId: string | null;
}
const initialState:AuthState ={
    token :null,
    userName:[],
    userId:null
}

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setToken : (state,action: PayloadAction<object>) =>{
            state.token = action.payload
        },
        clearToken:(state) =>{
            state.token = null
        },
        userNameSelection:(state,action: PayloadAction<string>) =>{
            state.userName.push(action.payload);
           (action.payload)
        },
        userIdSelection: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
       
    }
})

export const {setToken,clearToken,userNameSelection,userIdSelection} = authSlice.actions
export default authSlice.reducer