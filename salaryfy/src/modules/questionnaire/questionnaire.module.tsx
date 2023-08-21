import "./questionnaire.css";
import { Navigate, Route, Routes } from "react-router-dom";
import QuestionnairePersonalDetails from "./pages/personal-details.page";
import ScreeningQuestions from "./pages/screening-questions";
import ScheduleInterviewPage from "./pages/schedule-interview.page";
import FresherDashboardPage from "./pages/fresher-dashboard.page";
import FresherProfileUploadPage from "./pages/fresher-profile-upload.page";
import StepsLayout from "../../components/stepsLayout/StepsLayout";

export default function QuestionnaireModule() {
  return (
    <Routes>
      <Route element={<StepsLayout />}>
        <Route index element={<QuestionnairePersonalDetails />} />
      </Route>

      <Route path="screening-questions" element={<ScreeningQuestions />} />
      <Route path="schedule-interview" element={<ScheduleInterviewPage />} />
      <Route path="fresher-dashboard" element={<FresherDashboardPage />} />
      <Route
        path="fresher-profile-upload"
        element={<FresherProfileUploadPage />}
      />
    </Routes>
  );
}
