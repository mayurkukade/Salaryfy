import AhmedabadUniversitylogo  from "../../../assets/Universities/Ahmedabad-University-logo.png";
import DibrugarhUniversitylogo from "../../../assets/Universities/Dibrugarh-University-logo.png";
import AKSUniversitylogo from "../../../assets/Universities/AKS-University-logo.png";
import AshokaUniversitylogo from "../../../assets/Universities/Ashoka-University-logo.png"; 
import BangaloreUniversitylogo from "../../../assets/Universities/Bangalore-University-logo.png"
import BharatiVidyapeethlogo from "../../../assets/Universities/Bharati-Vidyapeeth-logo.png"
import IILMUniversitylogo from "../../../assets/Universities/IILM-University-logo.png";
import ITMUniversitylogo from "../../../assets/Universities/ITM-University-logo.png";
import JaiPrakashVishwavidyalayalogo from "../../../assets/Universities/Jai-Prakash-Vishwavidyalaya-logo.png"
import KannurUniversitylogo from "../../../assets/Universities/Kannur-University-logo.png";
import KrishnaUniversitylogo from "../../../assets/Universities/Krishna-University-logo.png";
import MahatmaGandhiCentralUniversitylogo from "../../../assets/Universities/Mahatma-Gandhi-Central-University-logo.png";





const Universities = () => {
  return (
    <div className="w-full font-Lexend">
      <div className="container mx-auto">
        <p className="text-center mt-8 md:mt-[4rem] mb-6 md:mb-[3.81rem] text-2xl md:text-[3.9375rem] font-semibold">
          <span className="text-darkGreen">Students from </span>
          <span className="text-yellow"> Universities</span>
        </p>
        {/* <marquee scrollamount="10"> */}
        <div className="max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-2 px-3 md:grid-cols-4 grid-rows-auto gap-4 md:gap-8 mb-10 ">
            <UniversitiesCard
              img={AhmedabadUniversitylogo}
              university={"Ahmedabad"}
              
            />
            <UniversitiesCard
              img={DibrugarhUniversitylogo}
              university={"Dibrugarh"}
            />
            <UniversitiesCard
              img={AKSUniversitylogo}
              university={"A.K.S"}
            />
            <UniversitiesCard
              img={AshokaUniversitylogo}
              university={"Ashoka"}
            />
            <UniversitiesCard
              img={BangaloreUniversitylogo}
              university={"Bangalore"}
            />
            <UniversitiesCard
              img={BharatiVidyapeethlogo}
              university={"Bharati Vidyapeeth"}
            />
            <UniversitiesCard
              img={IILMUniversitylogo}
              university={"IILM"}
            />
            <UniversitiesCard
              img={ITMUniversitylogo}
              university={"ITM"}
            />
            <UniversitiesCard img={JaiPrakashVishwavidyalayalogo} university={"JaiPrakash Vishwavidyalaya"} />

            <UniversitiesCard
              img={KannurUniversitylogo}
              university={"Kannur"}
            />
            <UniversitiesCard
              img={KrishnaUniversitylogo}
              university={"Krishna"}
            />
            <UniversitiesCard
              img={MahatmaGandhiCentralUniversitylogo}
              university={"Mahatma Gandhi Central"}
            />
          </div>
        </div>
        {/* </marquee> */}
      </div>
    </div>
  );
};

// const UniversitiesCard = ({ img, university }) => {
//   return (
//     <div className="rounded-lg bg-gradient-to-br p-4 shadow-md w-full md:w-[100%] h-[5.95969rem] flex items-center ">
//       <img src={img} className="max-h-full float-left" />
//       <p className="items-center text-[0.65rem] md:text-[1.1rem] pl-[12px] color-[#005F59]">
//         {university} <br /> University
//       </p>
//     </div>
//   );
// };


const UniversitiesCard = ({ img, university }: { img: string; university: string }) => {
  return (
    <div className="rounded-lg bg-gradient-to-br p-4 shadow-md w-full md:w-[100%] h-[5.95969rem] flex items-center ">
      <img src={img} alt={`${university} University`} className="max-h-full float-left" />
      <p className="items-center break-all text-[0.65rem] md:text-[1.1rem]  pl-[12px] color-[#005F59]">
        {university} <br /> University
      </p>
    </div>
  );
};

export default Universities;
