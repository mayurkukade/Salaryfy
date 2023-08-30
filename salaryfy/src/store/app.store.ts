import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app.reducer';
import authSliceReducer from '../features/reducers/authReducers/auth-slice-reducer';
import apiIntegrationSlice from '../features/api-integration/apiUserSlice/api-integration-user.slice'
import mainStepsCounterReducer from '../features/reducers/main-steps-counter/main-steps-counter.reducer';
import screeningQuestionsSlice from '../features/api-integration/screeningQuestion/screeningQuestionStep2Slice';
import questionnaireRegisterFormSlice from '../features/reducers/questionnaire-register-form/questionnaire-register-form.slice';
import currentRouteReducer from '../features/reducers/currentRouteReducers/current-route.reducer';
import scheduleInterviewReducder from '../features/reducers/schedule-interview-form/schedule-interview.slice';
import interviewSchedule from '../features/api-integration/interview-schedule/interview-schedule-slice';
import upcomingInterviewSlice from '../features/api-integration/upcoming-interviews/upcoming-interviews.slice';
import profileQualificationSlice from '../features/api-integration/profile-qualification/profile-qualification.slice';
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
    currentRoute:currentRouteReducer,
    scheduleInterviewForm:scheduleInterviewReducder,

    [apiIntegrationSlice.reducerPath]: apiIntegrationSlice.reducer,
    [screeningQuestionsSlice.reducerPath]:screeningQuestionsSlice.reducer,
    [interviewSchedule.reducerPath]:interviewSchedule.reducer,
    [upcomingInterviewSlice.reducerPath]: upcomingInterviewSlice.reducer,
    [profileQualificationSlice.reducerPath]: profileQualificationSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiIntegrationSlice.middleware).concat(screeningQuestionsSlice.middleware)

});
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
export default appStore;
