import harvarduniversitylogo from "../../../assets/Logos/harvarduniversity.png";
import psuniversity from "../../../assets/Logos/psuniversity.png";
import americanuniversitylogo from "../../../assets/Logos/americanuniversity.png";
import standforduniversity from "../../../assets/Logos/stanforduniversity.png";
import universityllogo from "../../../assets/Logos/texasuniversity.png";

const Universities = () => {
  return (
    <div className="w-full font-Lexend">
      <div className="container mx-auto">
        <p className="text-center mt-8 md:mt-[4rem] mb-6 md:mb-[3.81rem] text-2xl md:text-[3.9375rem] font-semibold">
          <span className="text-darkGreen">Students from </span>
          <span className="text-yellow"> Universities</span>
        </p>
        {/* <marquee scrollamount="10"> */}
        <div className="grid grid-cols-2 px-3 md:grid-cols-4 grid-rows-auto gap-4 md:gap-8 mb-10 ">
          <UniversitiesCard
            img={harvarduniversitylogo}
            university={"Harvard"}
          />
          <UniversitiesCard
            img={psuniversity}
            university={"Pennsylvania State"}
          />
          <UniversitiesCard
            img={psuniversity}
            university={"Pennsylvania State"}
          />
          <UniversitiesCard
            img={psuniversity}
            university={"Pennsylvania State"}
          />
          <UniversitiesCard
            img={americanuniversitylogo}
            university={"American"}
          />
          <UniversitiesCard
            img={standforduniversity}
            university={"Standford"}
          />
          <UniversitiesCard
            img={standforduniversity}
            university={"Standford"}
          />
          <UniversitiesCard
            img={standforduniversity}
            university={"Standford"}
          />
          <UniversitiesCard img={universityllogo} university={"Texas"} />

          <UniversitiesCard
            img={harvarduniversitylogo}
            university={"Harvard"}
          />
          <UniversitiesCard
            img={harvarduniversitylogo}
            university={"Harvard"}
          />
          <UniversitiesCard
            img={harvarduniversitylogo}
            university={"Harvard"}
          />
        </div>
        {/* </marquee> */}
      </div>
    </div>
  );
};

const UniversitiesCard = ({ img, university }) => {
  return (
    <div className="rounded-lg bg-gradient-to-br p-4 shadow-md w-full md:w-[100%] h-[5.95969rem] flex items-center ">
      <img src={img} className="max-h-full float-left" />
      <p className="items-center text-[0.65rem] md:text-[1.1rem] pl-[12px] color-[#005F59]">
        {university} <br /> University
      </p>
    </div>
  );
};

export default Universities;
