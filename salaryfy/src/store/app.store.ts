import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app.reducer';
import authSliceReducer from '../features/reducers/authReducers/auth-slice-reducer';
import apiIntegrationSlice from '../features/api-integration/apiUserSlice/api-integration-user.slice'
import mainStepsCounterReducer from '../features/reducers/main-steps-counter/main-steps-counter.reducer';
import screeningQuestionsSlice from '../features/api-integration/screeningQuestion/screeningQuestionStep2Slice';
import questionnaireRegisterFormSlice from '../features/reducers/questionnaire-register-form/questionnaire-register-form.slice';
import upcomingInterviewSlice from '../features/api-integration/upcoming-interviews/upcoming-interviews.slice';
export interface AppStoreStateType {
  root: ReturnType<typeof rootReducer>,
  [apiIntegrationSlice.reducerPath]: ReturnType<typeof apiIntegrationSlice.reducer>
}

const appStore = configureStore({
  reducer: {
    root: rootReducer,
    mainStepsCounter:mainStepsCounterReducer,
    authSlice : authSliceReducer, 
    registerFormSlice:questionnaireRegisterFormSlice,

    [apiIntegrationSlice.reducerPath]: apiIntegrationSlice.reducer,
    [screeningQuestionsSlice.reducerPath]:screeningQuestionsSlice.reducer,
    [upcomingInterviewSlice.reducerPath]: upcomingInterviewSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiIntegrationSlice.middleware).concat(screeningQuestionsSlice.middleware)

});
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export default appStore;
