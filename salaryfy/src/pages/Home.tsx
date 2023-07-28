import HeroSection2 from "../components/HomeComponent/HeroSection";
import Navbar from "../components/NavComponent/Navbar";
import OurStats from "../components/HomeComponent/OurStats";
import YellowWidth from "../components/HomeComponent/YellowWidth";
import PlacementsPartners from "../components/HomeComponent/PlacementsPartners";
import Testimonals from "../components/HomeComponent/Testimonals";
import Universities from "../components/HomeComponent/Universities";
import Footer from "../components/FooteComponent/Footer";
const Home = () => {
  return (
    <>
      <div className="w-full block">
        <Navbar />
        <HeroSection2 />
        <YellowWidth/>
        <OurStats/>
        <PlacementsPartners/>
        <Testimonals/>
        <Universities/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
