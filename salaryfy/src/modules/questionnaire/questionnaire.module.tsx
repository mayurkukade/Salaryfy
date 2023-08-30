import "./questionnaire.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import QuestionnairePersonalDetails from "./pages/personal-details.page";
import ScreeningQuestions from "./pages/screening-questions";
import ScheduleInterviewPage from "./pages/schedule-interview.page";
import FresherDashboardPage from "./pages/fresher-dashboard.page";
import FresherProfileUploadPage from "./pages/fresher-profile-upload.page";
import StepsLayout from "../../components/stepsLayout/StepsLayout";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app.store";
export default function QuestionnaireModule() {
  const token = Cookies.get("jwtToken");
  const currentPath = useSelector(
    (state: RootState) => state.currentRoute.currentRoute
  );
  console.log(currentPath);
  const navigate = useNavigate();
  if (token && currentPath == "questionnaire") {
    navigate("/questionnaire/screening-questions");
  }

  return (
    <Routes>
      <Route element={<StepsLayout />}>
        <Route index element={<QuestionnairePersonalDetails />} />

        <Route path="screening-questions" element={<ScreeningQuestions />} />

        <Route path="schedule-interview" element={<ScheduleInterviewPage />} />
        <Route path="fresher-dashboard" element={<FresherDashboardPage />} />
      </Route>
    
      <Route
        path="fresher-profile-upload"
        element={<FresherProfileUploadPage />}
      />
    </Routes>
  );
}
