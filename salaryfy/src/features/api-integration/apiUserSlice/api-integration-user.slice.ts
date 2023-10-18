
import { apiSlice } from "../../apiSlice";
import { email } from "../interface/user.model.interface";
// import { FormData } from "../interface/user.model.interface";
import { userLogin } from "../interface/user.model.interface";
const apiIntegrationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: (id) => `/user/getAllUsers?pageNo=${id}`, // Remove any query parameters here
    }),
    register: builder.mutation<unknown, unknown>({
      query: (register: unknown) => ({
        url: `/user/register`,
        //transformResponse: console.log(register),
        headers:{
          "Content-Type":"application/json"
        },
        method: "POST",
        body: register,
      }),
      invalidatesTags: ["User"],
    }),
    sendEmail: builder.mutation<object, email>({
      query: (email) => ({
        url: `/verification/sendEmail?email=${email}`,
        //transformResponse: console.log(email),
        method: "POST",
        body: email,
      }),
      invalidatesTags: ["User"],
    }),
    verifyOTP: builder.mutation<object, email>({
      query: ({ otp, email }) => ({
        //transformResponse: console.log(otp, email),
        url: `/verification/verifyOpt?otp=${Number(otp) }&email=${email}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: {
          otp: otp,
          email: email,
        },
      }),
      invalidatesTags: ["User"],
    }),
   login:builder.mutation<object,userLogin>({
    query:({username,password})=>({
      //transformResponse: console.log(username,password),
      url: '/jwt/login',
      headers: {
        "Content-Type": "application/json",
      },
      method:"POST",
      body: {
        username:username,
        password:password
      },
    }),
    
      invalidatesTags: ["User"],
   })
  }),
});

export const {
  useFetchItemsQuery,
  useRegisterMutation,
  useSendEmailMutation,
  useVerifyOTPMutation,
  useLoginMutation
} = apiIntegrationSlice;

export default apiIntegrationSlice;
