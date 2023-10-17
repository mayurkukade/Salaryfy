import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import APP_CONSTANTS from "../contants/app.contants";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APP_CONSTANTS.SERVER_URL,
    prepareHeaders: (headers) => {
      let  token = Cookies.get('jwtToken')
      //console.log(JSON.parse(Cookies.get('jwtToken')) )
      //const token = localStorage.getItem("userToken");
      //console.log(token);
      if (token) {
        token =  JSON.parse(Cookies.get('jwtToken')) 
        headers.set("authorization", `Bearer ${token}`);
      }
  
      return headers;
    },
  }),
 
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
