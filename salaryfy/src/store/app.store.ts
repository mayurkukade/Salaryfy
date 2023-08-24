import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './app.reducer';
import authSliceReducer from '../features/reducers/authReducers/auth-slice-reducer';
import apiIntegrationSlice from '../features/api-integration/apiUserSlice/api-integration-user.slice'
import mainStepsCounterReducer from '../features/reducers/main-steps-counter/main-steps-counter.reducer';

export interface AppStoreStateType {
  root: ReturnType<typeof rootReducer>,
  [apiIntegrationSlice.reducerPath]: ReturnType<typeof apiIntegrationSlice.reducer>
}

const appStore = configureStore({
  reducer: {
    root: rootReducer,
    mainStepsCounter:mainStepsCounterReducer,
    authSlice : authSliceReducer,
    [apiIntegrationSlice.reducerPath]: apiIntegrationSlice.reducer,
  },
  middleware: () =>
    getDefaultMiddleware().concat(apiIntegrationSlice.middleware)

});
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export default appStore;
