import "./App.css";
import { Routes, Route } from "react-router-dom";

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

import Footer from "./components/FooteComponent/Footer";
import PlacementDrivePage from "./pages/PlacementDrivePage";
import PlacementDriveDetails from "./pages/PlacementDriveDetails";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placementdrive" element={<PlacementDrivePage />} />
        <Route path="/placementdetails" element={<PlacementDriveDetails />} />

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

        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
