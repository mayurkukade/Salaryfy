import './questionnaire.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import QuestionnairePersonalDetails from './pages/personal-details.page';
import ScreeningQuestions from './pages/screening-questions';
import ScheduleInterviewPage from './pages/schedule-interview.page';
import FresherDashboardPage from './pages/fresher-dashboard.page';
import FresherProfileUploadPage from './pages/fresher-profile-upload.page';

export default function QuestionnaireModule() {

  return (
    <>
      {/* <Route path="personal-details" element={<QuestionnairePersonalDetails />} />
      <Route path="screening-questions" element={<ScreeningQuestions />} />
      <Route path="schedule-interview" element={<ScheduleInterviewPage />} />
      <Route path="fresher-dashboard" element={<FresherDashboardPage />} />
      <Route path="fresher-profile-upload" element={<FresherProfileUploadPage />} /> */}
      Hello
    </>
  );
}

// export default function QuestionnaireModule() {
//   const { pathname: currentPath } = useLocation();
//   // const currentPath = location.pathname;

//   // debugger
//   const getCurrentElement = () => {
//     switch (currentPath) {
//       case '/questionnaire':
//         return <QuestionnairePersonalDetails />;
//       case '/questionnaire/personal-details':
//         return <QuestionnairePersonalDetails />;
//       case '/questionnaire/screening-questions':
//         return <ScreeningQuestions />;
//       case '/questionnaire/schedule-interview':
//         return <ScheduleInterviewPage />;
//       case '/questionnaire/fresher-dashboard':
//         return <FresherDashboardPage />;
//       case '/questionnaire/fresher-profile-upload':
//         return <FresherProfileUploadPage />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {/* Your common module components or layout here */}
//       {/* <h2>Questionnaire Module</h2> */}
//       {getCurrentElement()}
//     </>
//   );
// }
