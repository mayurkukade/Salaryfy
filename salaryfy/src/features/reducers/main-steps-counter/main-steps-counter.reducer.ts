import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/app.store";
import Counter from "./main-steps-counter.interface";

const initialState: Counter = {
  fullNameCounter: 0,
  phoneNumberCounter: 0,
  emailCounter: 0,
  passwordCounter: 0,
  confirmPasswordCounter: 0,
  mainStepsCounter: 0,
  stepTwo: 0,
  resStepTwo: false,
};

const stepOneCounterSlice = createSlice({
  name: "mainStepsCounter",
  initialState,
  reducers: {
    phoneNumberStepsCounterIncrement: (state) => {
      state.phoneNumberCounter = 5;
    },
    phoneNumberStepsCounterDecrement: (state) => {
      state.phoneNumberCounter = 0;
    },
    passwordStepsCounterIncrement: (state) => {
      state.passwordCounter = 5;
    },
    passwordStepsCounterDecrement: (state) => {
      state.passwordCounter = 0;
    },
    nameStepsCounterIncrement: (state) => {
      state.fullNameCounter = 5;
    },
    nameStepsCounterDecrement: (state) => {
      state.fullNameCounter = 0;
    },
    emailStepsCounterIncrement: (state) => {
      state.emailCounter = 5;
    },
    emailStepsCounterDecrement: (state) => {
      state.emailCounter = 0;
    },
    confirmStepsCounterIncrement: (state) => {
      state.confirmPasswordCounter = 5;
    },
    confirmStepsCounterDecrement: (state) => {
      state.confirmPasswordCounter = 0;
    },
    resSteptwoSelector: (state, actions: PayloadAction<boolean>) => {
      state.resStepTwo = actions.payload;
      console.log(actions.payload);
      console.log(state.resStepTwo);
    },
    

  },
});

export const {
  phoneNumberStepsCounterIncrement,
  phoneNumberStepsCounterDecrement,
  passwordStepsCounterIncrement,
  passwordStepsCounterDecrement,
  nameStepsCounterIncrement,
  nameStepsCounterDecrement,
  emailStepsCounterIncrement,
  emailStepsCounterDecrement,
  confirmStepsCounterDecrement,
  resSteptwoSelector,
} = stepOneCounterSlice.actions;
export const phoneNumberCounterSelector = (state: RootState) =>
  state.mainStepsCounter.phoneNumberCounter;

export default stepOneCounterSlice.reducer;
