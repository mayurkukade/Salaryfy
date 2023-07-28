import HeroSection2 from "../components/HomeComponent/HeroSection";
import Navbar from "../components/NavComponent/Navbar";
import OurStats from "../components/HomeComponent/OurStats";
import YellowWidth from "../components/HomeComponent/YellowWidth";
import PlacementsPartners from "../components/HomeComponent/PlacementsPartners";

const Home = () => {
  return (
    <>
      <div className="w-full block">
        <Navbar />
        <HeroSection2 />
        <YellowWidth/>
        <OurStats/>
        <PlacementsPartners/>
      </div>
    </>
  );
};

export default Home;
