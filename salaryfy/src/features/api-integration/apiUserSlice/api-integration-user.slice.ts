
import { apiSlice } from '../../apiSlice';
import { emailOTP } from '../interface/user.model.interface';
const apiIntegrationSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: (id) => `/user/getAllUsers?pageNo=${id}`, // Remove any query parameters here
    }),
    register: builder.mutation<{}, emailOTP>({
      query: emailOTP => ({
          url: `/sendEmail?email=${emailOTP.addEmail}`,
          transformResponse:console.log(emailOTP.addEmail),
          
          method: 'POST',
          body: emailOTP    
      }),
      invalidatesTags: ['User']
  }),
  }),
});

export const { useFetchItemsQuery,useRegisterMutation } = apiIntegrationSlice;

export default apiIntegrationSlice;

