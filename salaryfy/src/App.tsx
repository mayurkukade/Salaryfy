import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavComponent/Navbar";
import Home from "./pages/Home";
import SignUp from "./components/SignUpComponents/SignUp";
import VerifyEmail from "./components/SignUpComponents/VerifyEmail";
import Paymentcompleted from "./pages/Paymentcompleted";
import ForgotPasswordOtp from "./pages/ForgotPasswordOtp";
import ForgorPasswordEmail from "./pages/ForgorPasswordEmail";
import { Login } from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { PasswordResetSuccessful } from "./pages/PasswordResetSuccessful";
import "./App.css";
import AppLayout from "./components/appLayout/AppLayout";

import Footer from "./components/FooteComponent/Footer";
import PlacementDrivePage from "./modules/questionnaire/PlacementDrivePage";
import PlacementDriveDetails from "./pages/PlacementDriveDetails";

import PlanNotAvailable from "./pages/PlanNotAvailable";
import FillDetails from "./pages/FillDetails";
import LandingPage from "./pages/LandingPage";
import QuestionnaireModule from "./modules/questionnaire/questionnaire.module";
import EligibilityForm from "./pages/EligibilityForm";
import JobDescription from "./pages/JobDescription";
import Roadmap from "./pages/Roadmap";
import StepsCounterSlice from "./features/steps-counter/steps-counter.slice";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire/*" element={<QuestionnaireModule />} />
        </Route> */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire/*" element={<QuestionnaireModule />} />
        </Route>
    
    
        
        {/* <Route path="/questionnaire/*" element={<QuestionnaireModule />} /> */}
        <Route path="/placementdrive" element={<PlacementDrivePage />} />
        <Route path="/placementdetails" element={<PlacementDriveDetails />} />
        {/* <Routes> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/paymentcompleted" element={<Paymentcompleted />} />
        <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp />} />
        <Route path="/forgotpasswordemail" element={<ForgorPasswordEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route
          path="/passwordresetsuccessfully"
          element={<PasswordResetSuccessful />}
        />
        <Route path="/plannotavailable" element={<PlanNotAvailable />} />
        <Route path="/filldetails" element={<FillDetails />} />
        <Route path="/landingpage" element={<LandingPage />} />

        <Route path="/eligibilityform" element={<EligibilityForm />} />
        <Route path="/jobdescription" element={<JobDescription />} />

        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      3
      <Footer />
    </>
  );
}

export default App;
