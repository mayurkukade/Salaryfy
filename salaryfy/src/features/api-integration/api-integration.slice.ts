import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APP_CONSTANTS from '../../contants/app.contants';
import SLICE_NAMES from '../../features/slice-names.enum';

const apiIntegrationSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: APP_CONSTANTS.serverUrl }),
  reducerPath: SLICE_NAMES.API_INTEGRATION,
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: () => 'items', // Remove any query parameters here
    }),
  }),
});

export const { useLazyFetchItemsQuery } = apiIntegrationSlice;

export default apiIntegrationSlice;
