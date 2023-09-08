import HeroSection2 from "../components/HomeComponent/HeroSection";

import OurStats from "../components/HomeComponent/OurStats";
import YellowWidth from "../components/HomeComponent/YellowWidth";
import PlacementsPartners from "../components/HomeComponent/PlacementsPartners";
import Testimonals from "../components/HomeComponent/Testimonals";
import Universities from "../components/HomeComponent/Universities";

const Home = () => {
  return (
    <>
      <div className="w-full block ">
        <HeroSection2 />
        <YellowWidth />
        <OurStats />
         <PlacementsPartners/>
       <Testimonals/>
        <Universities/> 
      </div>
    </>
  );
};

export default Home;
