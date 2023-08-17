
import { apiSlice } from '../apiSlice';

const apiIntegrationSlice = apiSlice.injectEndpoints({
 
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: () => '/getAllUsers?pageNo=0', // Remove any query parameters here
    }),
  }),
});

export const { useFetchItemsQuery } = apiIntegrationSlice;

export default apiIntegrationSlice;
