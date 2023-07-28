import HeroSection2 from "../components/HomeComponent/HeroSection";
import Navbar from "../components/NavComponent/Navbar";
import OurStats from "../components/HomeComponent/OurStats";
import YellowWidth from "../components/HomeComponent/YellowWidth";

const Home = () => {
  return (
    <>
      <div className="w-full block">
        <Navbar />
        <HeroSection2 />
        <YellowWidth/>
        <OurStats/>
      </div>
    </>
  );
};

export default Home;
