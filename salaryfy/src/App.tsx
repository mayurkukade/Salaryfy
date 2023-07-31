import "./App.css";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/SignUpComponents/SignUp";
import VerifyEmail from "./components/SignUpComponents/VerifyEmail";
import Paymentcompleted from "./pages/Paymentcompleted";

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/verifyemail" element={<VerifyEmail/>}/>
   <Route path="/paymentcompleted"element={<Paymentcompleted/>}/>
   {/* <p>App</p> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
