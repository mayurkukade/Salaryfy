import "./App.css";
import Navbar from "./components/NavComponent/Navbar";
import Home from "./pages/Home";
import Footer from "./components/FooteComponent/Footer";
import PlacementDrivePage from "./pages/PlacementDrivePage";
import PlacementDriveDetails from "./pages/PlacementDriveDetails";
function App() {
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
{/* <PlacementDrivePage/> */}
      {/* <Footer /> */}
      <PlacementDriveDetails/>
    </>
  );
}

export default App;
