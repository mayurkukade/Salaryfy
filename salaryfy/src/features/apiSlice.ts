
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import APP_CONSTANTS from "../contants/app.contants";
export const  apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl: APP_CONSTANTS.SERVER_URL}),
    tagTypes:["User"],
    endpoints: (builder) => ({}),
})
