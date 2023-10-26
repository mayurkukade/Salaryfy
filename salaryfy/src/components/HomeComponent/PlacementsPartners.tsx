import Marquee from "react-fast-marquee";

import lenskartlogo from "../../../assets/Logos/lenskartlogo.png";
import cromalogo from "../../../assets/Logos/cromalogo.png";
import hamleyslogo from "../../../assets/Logos/hamleyslogo.png";
import justdial from "../../../assets/Logos/justdial.png";
import trentlogo from "../../../assets/Logos/Trent.png";
import jimmychoo from "../../../assets/Logos/jimmuchoo.png";
import wipro from "../../../assets/Logos/wipro.jpg";
import techmahindra from "../../../assets/Logos/techmahindra.png";
const PlacementsPartners = () => {
  return (
    <div className="w-full  font-Lexend ">
      <div className="container mx-auto">
        <p className="text-center mt-8 md:mt-[4rem]  mb-6 md:mb-[3.81rem] text-2xl md:text-[3.9375rem] font-semibold xs:text-[2.1rem] xs:leading-[3rem] xxs:text-[2.1rem] ">
          <span className="text-darkGreen">Our Placement</span>
          <span className="text-yellow"> Partners</span>
        </p>
        {/* <marquee scrollamount="10"> */}
        
        {/* </marquee> */}
        <div className="container mx-auto   ">
          <Marquee  play={true}>
            <div className="flex justify-center align-middle gap-12 mb-5   xs:justify-evenly">
              <div className="w-[6rem] bg-gradient-to-br   rounded-lg md:p-4 shadow-md ">
                <img
                  src={lenskartlogo}
                  alt="lenskart Logo"
                  className="max-h-full  laptop:ml-1  w-14 xs:mt-4 xs:ml-4  xxs:ml-5 xxs:mt-3 "
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-2 shadow-md ">
                <img
                  src={techmahindra}
                  alt="justdial Logo"
                  className="max-h-full laptop:mt-4 xs:mt-3 w-15 "
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4 shadow-md  ">
                <img
                  src={justdial}
                  alt="justdial Logo"
                  className="max-h-full w-10 laptop:ml-2 laptop:mt-2 xs:mt-4 xs:ml-6 xxs:ml-5 xxs:mt-3 "
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4 shadow-md ">
                <img
                  src={cromalogo}
                  alt="justdial Logo"
                  className="max-h-full mt-4 w-15 laptop:p-0 xs:p-2"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4 shadow-md ">
                <img
                  src={trentlogo}
                  alt="trent Logo"
                  className="max-h-full laptop:mt-5 laptop:ml-0  w-16 xs:mt-7 xs:ml-5 xxs:ml-5 xxs:mt-5"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4 shadow-md ">
                <img
                  src={hamleyslogo}
                  alt="hamleys Logo"
                  className="max-h-full laptop:mt-2 laptop:ml-0 w-16 xs:mt-4 xs:ml-4 xxs:ml-5 xxs:mt-2"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-2 shadow-md ">
                <img
                  src={wipro}
                  alt="justdial Logo"
                  className="w-19 laptop:mt-5 xs:mt-3  xxs:mt-3"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-2 shadow-md ">
                <img
                  src={jimmychoo}
                  alt="jimmychoo Logo"
                  className="max-h-full laptop:mt-4 xs:mt-3 xxs:mt-3"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4 shadow-md ">
                <img
                  src={hamleyslogo}
                  alt="hamleys Logo"
                  className="max-h-full xs:mt-2 laptop:mt-2"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br   rounded-lg md:p-4 shadow-md ">
                <img
                  src={lenskartlogo}
                  alt="lenskart Logo"
                  className="max-h-full laptop:ml-1  w-14 xs:mt-4 xs:ml-3  xxs:ml-5 xxs:mt-3"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-2 shadow-md ">
                <img
                  src={techmahindra}
                  alt="techmahindra Logo"
                  className="max-h-full mt-3 w-15 md:mt-3 xxs:mt-2"
                />
              </div>
              <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-4  shadow-md mr-8  ">
                <img
                  src={justdial}
                  alt="justdial Logo"
                  className="max-h-full w-10 laptop:ml-2 laptop:mt-2 xs:mt-4 xs:ml-6 xxs:ml-5 xxs:mt-3 "
                />
              </div>
              {/* <div className="w-[6rem] bg-gradient-to-br rounded-lg md:p-2 shadow-md ">
                <img
                  src={wipro}
                  alt="justdial Logo"
                  className="w-19 mt-3"
                />
              </div> */}
             
            </div>

            {/* <div className="rounded-lg bg-gradient-to-br  md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
         
            </div>
     
            <div className="rounded-lg bg-gradient-to-br  md: shadow-md w-full md:w-[8.20544rem] h-[7.95969rem] flex items-center justify-center">
              
            </div>
      
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
        
            </div>
       
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
 
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
        
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div>
            <div className="rounded-lg bg-gradient-to-br p-2 md:p-4 shadow-md w-full md:w-[11.20544rem] h-[7.95969rem] flex items-center justify-center">
              <img src={justdial} alt="justdial Logo" className="max-h-full" />
            </div> */}
          </Marquee>
          {/* <Marquee className="mt-2 "
      >
      
        <UniversitiesCard
               img={AhmedabadUniversitylogo}
              university1="Ahmedabad"
           />
     
     <UniversitiesCard
               img={DibrugarhUniversitylogo}
               university1="Dibrugarh"
         />
      
      <UniversitiesCard img={AKSUniversitylogo} university1="A.K.S" />
       
      <UniversitiesCard img={AshokaUniversitylogo} university1="Ashoka" />
 
      <UniversitiesCard
               img={BangaloreUniversitylogo}
               university1="Bangalore"
           />
        
        <UniversitiesCard
               img={BharatiVidyapeethlogo}
               university1="Bharati"
               university2="Vidyapeeth"
            />
              <UniversitiesCard img={IILMUniversitylogo} university1="IILM" />
              <UniversitiesCard img={ITMUniversitylogo} university1="ITM" />
              <UniversitiesCard
               img={JaiPrakashVishwavidyalayalogo}
               university1="JaiPrakash"
               university2="Vishwa"
               university3="Vidyalaya"
             />
             <UniversitiesCard img={KannurUniversitylogo} university1="Kannur" />
             <UniversitiesCard
               img={KrishnaUniversitylogo}
               university1="Krishna"
            />
       <UniversitiesCard
               img={MahatmaGandhiCentralUniversitylogo}
               university1="Mahatma"
              university2="Gandhi"
               university3="Central"
             />
      </Marquee> */}
        </div>
      </div>
    </div>
  );
};

export default PlacementsPartners;
