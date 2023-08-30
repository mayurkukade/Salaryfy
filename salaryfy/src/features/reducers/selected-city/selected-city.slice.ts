import { createSlice } from "@reduxjs/toolkit"
import { SLICE_NAMES } from "../../slice-names.enum";
import { CityStateType } from "./selected-city.interface";
import { setSelectedCityReducer } from "./selected-city.reducer";

const initialState: CityStateType = '';

const selectedCitySlice = createSlice({
  name: SLICE_NAMES.SELECTED_CITY,
  initialState,
  reducers: { setSelectedCity: setSelectedCityReducer }
});

export const { setSelectedCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer