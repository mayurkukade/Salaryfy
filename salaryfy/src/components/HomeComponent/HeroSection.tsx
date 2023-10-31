import { ChangeEvent, ReactNode, useState } from "react";
import herowave from "../../../assets/Homepage/Vector 30.jpg";
//import herosection from "../../../assets/Homepage/herosection.png";
import herosectionTwo from '../../../assets/Homepage/workingProfessionalNew-removebg-preview.png'
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSelectedCity } from "../../features/reducers/selected-city/selected-city.slice";
import { useGetJobLocationQuery } from "../../features/api-integration/adminSlice/adminSlice";
import { JSX } from "react/jsx-runtime";
//import { AppStoreStateType } from "../../store/app.store";
//import { SLICE_NAMES } from "../../features/slice-names.enum";

const HeroSection2 = () => {
  const [selectedCityState, setSelectedCityState] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetJobLocationQuery("");

  let getJobLocation: string | number | boolean | JSX.Element | Iterable<ReactNode>;

  if (isLoading) {
    getJobLocation = <p>Loading..</p>;
  } else if (data) {
    getJobLocation = data.map((item: undefined, i: undefined) => (
      <option key={i}>{item}</option>
    ));
  } else if (error) {
    getJobLocation = <p>error</p>;
  }

  // const jobs = useSelector(
  //   (state: AppStoreStateType) => state.root[SLICE_NAMES.JOBS]
  // );
  //console.log(jobs);
  const goHandler = () => {
    dispatch(setSelectedCity(selectedCityState));
    //console.log({ selectedCityState });
    navigate("/placementdrive");
  };

  function cityChange(cityChangeEvent: ChangeEvent<HTMLSelectElement>) {
    setSelectedCityState(() => cityChangeEvent.target.value);
  }
  return (
    <div>
      <div className="absolute z-[-1] " style={{ width: "100%" }}>
        <img alt="img wave" src={herowave} style={{ width: "100%" }} />
      </div>
      <div className="container p-2 mx-auto md:flex md:flex-row md:justify-center md:gap-[20px] ">
        <div className="text-center leading-none lg:text-[4rem] text-[2.5rem] mt-[2.5rem] font-semibold md:p-5  md:w-[60%] md:text-left md:text-[4.25rem] md:mt-[5rem]">
          <p className="text-darkGreen font-Lexend xs:text-[2.25rem] lg:text-[4rem] ">
            End to end
          </p>
          <div className=" font-Lexend text-darkGreen  ">
            <span className="text-yellow xs:text-[2.25rem] lg:text-[4rem]">
              Job Change
            </span>{" "}
            <br />
            <span className="text-darkGreen xs:text-[2.25rem] lg:text-[4rem]">
              solution for You
            </span>
            <p className="font-Lexend text-[0.8127rem] mt-[2rem] text-[#5B5B5B] leading-5  lg:m-0 lg:mt-[1.25rem] lg:text-[1.25rem] m-5">
              6874+ people have got their dream job through Salaryfy. When are
              you getting yours?
            </p>
            <div className=" lg:mt-[3.2rem] mt-[2.44rem]  flex relative text-start ml-5 lg:ml-0">
              <p className="font-Lexend lg:text-start text-[20px] text-darkGreen font-semibold flex relative align-text-top ">
                Select your City
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
                className="position mt-[-1.8rem]  "
              >
                <path
                  d="M42.2816 36.171C44.8539 27.9038 40.0893 20.2316 32.247 17.216C24.2629 14.1473 14.2223 15.592 7.18817 20.2942C5.72408 21.2752 7.28213 23.2516 8.76145 22.4281C15.2257 18.8334 23.1575 17.4909 30.3043 19.7089C33.413 20.6546 36.134 22.5339 38.0815 25.0804C40.6522 28.4087 40.6716 32.1426 40.7064 36.104C40.714 37.0571 42.0422 36.9255 42.2816 36.171Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M41.8158 44.9802C43.7341 41.5612 46.1159 37.8875 46.4341 33.9079C46.4525 33.7667 46.4147 33.6242 46.3284 33.5099C46.2421 33.3957 46.114 33.3184 45.9706 33.2943C45.8272 33.2701 45.6795 33.3009 45.5582 33.3801C45.4369 33.4594 45.3513 33.5811 45.3191 33.7201C44.3151 37.1365 42.6316 40.1226 40.7707 43.1259C39.1511 41.4893 37.763 39.5537 35.9128 38.1906C35.7478 38.0679 35.5433 38.0064 35.3358 38.0174C35.1282 38.0283 34.931 38.1108 34.7793 38.2502C34.6275 38.3897 34.5311 38.577 34.5071 38.7789C34.4832 38.9807 34.5333 39.184 34.6484 39.3526C36.2552 41.5859 38.1741 43.5877 40.3496 45.3C40.4623 45.3863 40.5933 45.447 40.7331 45.4778C40.873 45.5086 41.0182 45.5087 41.1584 45.4781C41.2986 45.4476 41.4302 45.3871 41.5439 45.301C41.6575 45.2149 41.7504 45.1053 41.8158 44.9802Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M43.1254 32.6867C45.6977 24.4194 40.9331 16.7472 33.0908 13.7316C25.1067 10.663 15.066 12.1077 8.03192 16.8099C6.56783 17.7908 8.12588 19.7672 9.6052 18.9437C16.0694 15.349 24.0013 14.0065 31.148 16.2246C34.2568 17.1702 36.9778 19.0495 38.9252 21.596C41.496 24.9243 41.5154 28.6582 41.5502 32.6196C41.5577 33.5727 42.8859 33.4411 43.1254 32.6867Z"
                  fill="#FECD08"
                />
                <path
                  d="M42.6595 41.4958C44.5778 38.0768 46.9597 34.4032 47.2778 30.4236C47.2963 30.2823 47.2584 30.1398 47.1721 30.0255C47.0858 29.9113 46.9577 29.8341 46.8143 29.8099C46.6709 29.7858 46.5233 29.8165 46.402 29.8958C46.2807 29.975 46.1951 30.0968 46.1628 30.2357C45.1588 33.6521 43.4753 36.6382 41.6145 39.6415C39.9949 38.0049 38.6068 36.0694 36.7565 34.7063C36.5916 34.5835 36.3871 34.5221 36.1795 34.533C35.9719 34.5439 35.7747 34.6264 35.623 34.7659C35.4713 34.9053 35.3748 35.0926 35.3509 35.2945C35.3269 35.4964 35.377 35.6997 35.4922 35.8682C37.0989 38.1015 39.0178 40.1033 41.1933 41.8156C41.3061 41.9019 41.437 41.9626 41.5769 41.9934C41.7167 42.0242 41.862 42.0244 42.0021 41.9938C42.1423 41.9632 42.274 41.9027 42.3876 41.8166C42.5013 41.7305 42.5941 41.6209 42.6595 41.4958Z"
                  fill="#FECD08"
                />
              </svg>
            </div>
            <div
              className="px-5  md:px-0 flex justify-center md:justify-start"
              // style={{border:"2px solid black"}}
            >
              <select
                onChange={cityChange}
                className="border-2 border-darkGreen-600  h-[43px] p-[10px] w-[20rem] rounded-[5px] font-semibold text-base "
              >
                <option></option>
                {getJobLocation}
              </select>
              <div className="flex bg-yellow text-darkGreen ml-3 w-[123px] h-[43px] rounded-md  justify-center items-center relative ">
                <button
                  className="  text-[20.247px] font-medium flex"
                  onClick={goHandler}
                >
                  Go
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="19"
                    viewBox="0 0 33 19"
                    fill="none"
                    className="align-middle ml-3 mt-1 cursor-pointer "
                  >
                    <path
                      d="M31.8711 10.375C32.3522 9.89391 32.3522 9.1139 31.8711 8.63281L24.0312 0.792963C23.5502 0.311871 22.7701 0.311871 22.2891 0.792963C21.808 1.27405 21.808 2.05406 22.2891 2.53515L29.2578 9.50391L22.2891 16.4727C21.808 16.9538 21.808 17.7338 22.2891 18.2148C22.7701 18.6959 23.5502 18.6959 24.0312 18.2148L31.8711 10.375ZM0 10.7358H31V8.27199H0V10.7358Z"
                      fill="#005F59"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[1.5rem] md:mt-[7rem] xxs:justify-center xxs:flex ">
          <img alt="hero" className=" w-full md:h-[24rem] md:w-[20rem] xxs:w-[16rem]  " src={herosectionTwo}  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
