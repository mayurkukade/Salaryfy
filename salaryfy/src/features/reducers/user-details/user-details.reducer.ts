import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { UserDetailsType } from "./user-details.interface";

export const setUserDetailsReducer: CaseReducer<UserDetailsType, PayloadAction<UserDetailsType>>
  = (state: UserDetailsType, action: PayloadAction<UserDetailsType>) => {
    state = action.payload;
    return state;
};