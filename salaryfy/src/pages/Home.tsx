import HeroSection2 from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OurStats from "../components/OurStats";
import YellowWidth from "../components/YellowWidth";

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
