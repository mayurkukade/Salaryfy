import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAMES } from '../../slice-names.enum';
import { UserDetailsType } from './user-details.interface';
import { setUserDetailsReducer } from './user-details.reducer';

/**
 * Initial state for a user profile.
 */
const initialState: UserDetailsType = {
  email: "no email",
  password: "no password",
  mobile_no: "no mobile no",
  role: "no role",
  fullName: "no full name",
  date: "01-01-2000",
  userProfileType: "no user profile",
  profilePhoto: "no profile photo",
  subType: "no sub type",
  paymentValidity: "no payment",
  user_id: NaN,
  document: "no document",
};

const userProfileSlice = createSlice({
  name: SLICE_NAMES.USER_DETAILS,
  initialState,
  reducers: {
    setUserDetails: setUserDetailsReducer,
  },
});

export const { setUserDetails } = userProfileSlice.actions;

export default userProfileSlice.reducer;
