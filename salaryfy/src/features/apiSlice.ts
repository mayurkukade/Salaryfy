
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import SLICE_NAMES from '../../src/features/slice-names.enum'
export const  apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:SLICE_NAMES.BASE_URL}),
    tagTypes:["User"],
    endpoints: (builder) => ({}),
})
