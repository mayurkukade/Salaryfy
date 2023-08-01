import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavComponent/Navbar";
import Home from "./pages/Home";
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
      </Routes>

      
      <Footer />


 
    </>
  );
}

export default App;
