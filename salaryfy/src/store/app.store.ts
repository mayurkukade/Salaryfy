import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './app.reducer';
import apiIntegrationSlice from '../features/api-integration/apiUserSlice/api-integration-user.slice'

const appStore = configureStore({
  reducer: {
    root: rootReducer,
    [apiIntegrationSlice.reducerPath]: apiIntegrationSlice.reducer,
  },
  middleware: () =>
    getDefaultMiddleware().concat(apiIntegrationSlice.middleware)

});

export default appStore;
