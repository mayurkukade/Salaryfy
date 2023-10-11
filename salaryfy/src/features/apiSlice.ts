import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import APP_CONSTANTS from "../contants/app.contants";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APP_CONSTANTS.SERVER_URL }),
  tagTypes: [
    "User",
    "interview-schedule",
    "jobs-keyword-search",
    "jobs-filter",
    "job-id",
    "user-id",
    "user-resume",
    "user-files",
    "upcoming-interviews",
    "get-profile-qualiication",
    "jobs-recommended",
    "get-user-skills",
    "set-user-skills",
    "get-universities",
    "jobs-lnjtcn",
    "job-post"
  ],
  endpoints: () => ({}),
});
