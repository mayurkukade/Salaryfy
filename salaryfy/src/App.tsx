import "./App.css";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/SignUpComponents/SignUp";
import VerifyEmail from "./components/SignUpComponents/VerifyEmail";
import Paymentcompleted from "./pages/Paymentcompleted";
import ForgotPasswordOtp from "./pages/ForgotPasswordOtp";
import ForgorPasswordEmail from "./pages/ForgorPasswordEmail";
import { Login } from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { PasswordResetSuccessful } from "./pages/PasswordResetSuccessful";
import PlanNotAvailable from "./pages/PlanNotAvailable";
import FillDetails from "./pages/FillDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/verifyemail" element={<VerifyEmail/>}/>
   <Route path="/paymentcompleted"element={<Paymentcompleted/>}/>
   <Route path="/forgotpasswordotp"element={<ForgotPasswordOtp/>}/>
   <Route path="/forgotpasswordemail"element={<ForgorPasswordEmail/>}/>
   <Route path="/login"element={<Login/>}/>
   <Route path="/resetpassword"element={<ResetPassword/>}/>
   <Route path="/passwordresetsuccessfully" element={<PasswordResetSuccessful/>}/>
   <Route path="/plannotavailable" element={<PlanNotAvailable/>}/>
   <Route path="/filldetails"element={<FillDetails/>}/>
  <Route path="/landingpage"element={<LandingPage/>}/>

   

   {/* <p>App</p> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
