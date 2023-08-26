import "./questionnaire.css";
import { Route, Routes } from "react-router-dom";
import QuestionnairePersonalDetails from "./pages/personal-details.page";
import ScreeningQuestions from "./pages/screening-questions";
import ScheduleInterviewPage from "./pages/schedule-interview.page";
import FresherDashboardPage from "./pages/fresher-dashboard.page";
import FresherProfileUploadPage from "./pages/fresher-profile-upload.page";
import StepsLayout from "../../components/stepsLayout/StepsLayout";
import Roadmap from "../../pages/Roadmap";
import SideBar from "./components/fresher-sidebar.component";

export default function QuestionnaireModule() {
  return (
    <Routes>
      <Route element={<StepsLayout />}>
        <Route index element={<QuestionnairePersonalDetails />} />
      </Route>

      <Route path="screening-questions" element={<ScreeningQuestions />} />
      <Route path="schedule-interview" element={<ScheduleInterviewPage />} />

      <Route element={<SideBar />}>
        <Route path="fresher-dashboard" element={<FresherDashboardPage />} />
        <Route path="fresher-profile-upload" element={<FresherProfileUploadPage />} />
        <Route path="fresher-roadmap" element={<Roadmap />} />
      </Route>

    </Routes>
  );
}
