import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { CityStateType } from "./selected-city.interface";

export const setSelectedCityReducer: CaseReducer<CityStateType, PayloadAction<CityStateType>>
  = (_state: CityStateType, action: PayloadAction<CityStateType>) => {
    return action.payload;
};