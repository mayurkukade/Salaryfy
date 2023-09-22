
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import AhmedabadUniversitylogo from "../../../assets/Universities/Ahmedabad-University-logo.png";
import DibrugarhUniversitylogo from "../../../assets/Universities/Dibrugarh-University-logo.png";
import AKSUniversitylogo from "../../../assets/Universities/AKS-University-logo.png";
import AshokaUniversitylogo from "../../../assets/Universities/Ashoka-University-logo.png";
import BangaloreUniversitylogo from "../../../assets/Universities/Bangalore-University-logo.png";
import BharatiVidyapeethlogo from "../../../assets/Universities/Bharati-Vidyapeeth-logo.png";
import IILMUniversitylogo from "../../../assets/Universities/IILM-University-logo.png";
import ITMUniversitylogo from "../../../assets/Universities/ITM-University-logo.png";
import JaiPrakashVishwavidyalayalogo from "../../../assets/Universities/Jai-Prakash-Vishwavidyalaya-logo.png";
import KannurUniversitylogo from "../../../assets/Universities/Kannur-University-logo.png";
import KrishnaUniversitylogo from "../../../assets/Universities/Krishna-University-logo.png";
import MahatmaGandhiCentralUniversitylogo from "../../../assets/Universities/Mahatma-Gandhi-Central-University-logo.png";


const Universities = () => {
  return (
    <div className="w-full font-Lexend">
      <div className="container mx-auto">
        <p className="text-center  mt-8 md:mt-16 mb-6 md:mb-15 text-2xl md:text-4xl font-semibold">
          <span className="text-darkGreen text-[3.9375rem]">Students from </span>
          <span className="text-yellow text-[3.9375rem]">University</span>
        </p>
        <div className="max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 ">
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
          </div>
        </div>
      </div>
    </div>
 
  )
};

const UniversitiesCard = ({
  img,
  university1,
  university2,
  university3,
}: {
  img: string;
  university1: string;
  university2?: string;
  university3?: string;
}) => {
  return (
    <div className="rounded-lg bg-gradient-to-br p-4 shadow-md w-full md:w-full md:max-w-[100%] h-[5.95969rem] flex items-center">
      <img
        src={img}
        alt={`${university1} University`}
        className="max-h-full float-left"
      />
      <div className="ml-3">
        <p className="text-xs md:text-base text-[#005F59]">
          {university1}
          {university2 && <br />}
          {university2}
          {university3 && <br />}
          {university3} University
        </p>
      </div>
    </div>
  );
};

export default Universities;
