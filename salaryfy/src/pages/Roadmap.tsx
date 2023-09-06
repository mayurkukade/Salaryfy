// import React from 'react'
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const Roadmap = () => {
  return (
    <>
      {/*Main Roadmap Div  */}

      <div className="bg-offwhite ">
        <div className="container   text-darkGreen flex flex-col  md:flex-row ">
          <div className=" w-[70%] pt-10 pb-10   text-[1.2rem] flex flex-col  md:text-[1.5rem] ml-[50px]">
            <h1 className="text-[1.5rem] font-bold md:text-[2.3rem]  pb-5 md:ml-[18rem]">
              Your Roadmap
            </h1>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block rounded md:text-[2rem]"></span>{" "}
                    Create Your Profile <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Build a strong and complete profile with accurate <br />
                      details to get noticed by top companies.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block rounded md:text-[2rem]"></span>{" "}
                    Connect with the Placement Manager <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Reach out to the placement manager for guidance and <br />
                      assistance throughout the placement process.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block rounded md:text-[2rem]"></span>{" "}
                    Upload Essential documents
                    <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Upload all necessary documents such as your resume,
                      <br />
                      certificates, and identity proof for verification.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block rounded md:text-[2rem]"></span>{" "}
                    Aligned the profile with the Company <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Tailor your profile according to the company's
                      requirements <br /> to increase the chances of getting
                      shortlisted.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block rounded md:text-[2rem]"></span>{" "}
                    Recruitment in Progress <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Stay updated on the recruitment status to be prepared{" "}
                      <br />
                      for the next step.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block content-[] w-[rounded-[]"></span>{" "}
                    Final Selection
                    <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Impress the recruiters with your skills and secure the{" "}
                      <br />
                      position.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block content-[] w-[rounded-[]"></span>{" "}
                    Offer Letter Released <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Receive the official offer letter and review the terms{" "}
                      <br /> and conditions.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block content-[] w-[rounded-[]"></span>{" "}
                    Offer Letter Accepted
                    <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Confirm your acceptance of the offer letter to secure{" "}
                      <br />
                      your position.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block content-[] w-[rounded-[]"></span>{" "}
                    Pay 1% of CTC
                    <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Pay the agreed 1% of the CTC as service fee <br />
                      for Salaryfy.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item ">
                    <span className="relative inline-block content-[] w-[rounded-[]"></span>{" "}
                    Appointment Letter Shared
                    <br />
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                    Get ready to join the company and receive your appointment <br /> letter with details about your role and benefits.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              
              
            </Timeline>
          </div>

          {/* Having Doubts  */}
          <div
            className=" w-[90%] mx-auto  md:h-[23.75rem] md:mt-[70px] sm:w-[60%] md:w-[30%] pb-6 "
            // style={{border:"2px solid black"}}
          >
            <h3 className="text-[1.5rem] font-bold text-center md:text-[2rem]">
              Having doubts?
            </h3>
            <div
              className="bg-aqua mt-6 rounded-[1.25rem]  p-7"
              // style={{ border: "2px solid black" }}
            >
              <h4 className="text-center text-[1.2rem] font-normal">
                Call our coucellor subtext here
              </h4>
              <div className="w-full flex flex-col  mt-3">
                {/* Email Div */}
                <div
                  className=" w-full flex flex-col py-2  items-center"
                  // style={{ border: "2px solid black" }}
                >
                  <p className="text-[1rem] text-center">Email us!</p>
                  {/* Svg */}

                  <div
                    className="flex items-center w-[19rem] h-[2.5rem]"
                    // style={{ border: "2px solid black" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79"
                      height="80"
                      viewBox="0 0 79 80"
                      fill="none"
                      className="absolute mb-5 mr-[50px] "
                    >
                      <g filter="url(#filter0_d_2085_4400)">
                        <circle
                          cx="32.4895"
                          cy="36.4895"
                          r="32.4895"
                          fill="white"
                        />
                        <circle
                          cx="32.4895"
                          cy="36.4895"
                          r="31.9093"
                          stroke="#005F59"
                          strokeWidth="1.16034"
                        />
                      </g>
                      <path
                        d="M16.75 21H46.75C48.8125 21 50.5 22.6875 50.5 24.75V47.25C50.5 49.3125 48.8125 51 46.75 51H16.75C14.6875 51 13 49.3125 13 47.25V24.75C13 22.6875 14.6875 21 16.75 21Z"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M50.5 24.75L31.75 37.875L13 24.75"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <filter
                          id="filter0_d_2085_4400"
                          x="0"
                          y="0.518988"
                          width="78.9006"
                          height="78.9026"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="3.48101"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2085_4400"
                          />
                          <feOffset dx="6.96203" dy="3.48101" />
                          <feGaussianBlur stdDeviation="5.22152" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2085_4400"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2085_4400"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <button className="w-[15rem] ml-[11%] md:ml-[8%] h-[2.5rem] bg-darkGreen rounded-full text-white text-[1rem] md:w-[20rem]">
                      contact@salaryfy.com
                    </button>
                  </div>
                </div>
                <p className="text-center text-[1.1rem]">or</p>
                {/*  Call US Div*/}
                <div
                  className=" w-full flex flex-col py-2  items-center"
                  // style={{ border: "2px solid black" }}
                >
                  <p className="text-[1rem] text-center">Let us call you!</p>
                  {/* Svg */}

                  <div
                    className="flex items-center w-[19rem] h-[2.5rem]"
                    // style={{ border: "2px solid black" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79"
                      height="80"
                      viewBox="0 0 79 80"
                      fill="none"
                      className="absolute mb-5 mr-[50px] "
                    >
                      <g filter="url(#filter0_d_2085_4411)">
                        <circle
                          cx="32.4895"
                          cy="36.4895"
                          r="32.4895"
                          fill="white"
                        />
                        <circle
                          cx="32.4895"
                          cy="36.4895"
                          r="31.9093"
                          stroke="#005F59"
                          strokeWidth="1.16034"
                        />
                      </g>
                      <path
                        d="M44.8704 22.4844H20.4838C18.5597 22.4844 17 24.0441 17 25.9682V50.3548C17 52.2788 18.5597 53.8386 20.4838 53.8386H44.8704C46.7944 53.8386 48.3542 52.2788 48.3542 50.3548V25.9682C48.3542 24.0441 46.7944 22.4844 44.8704 22.4844Z"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.6484 19V25.9676"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.7109 19V25.9676"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 32.9355H48.3542"
                        stroke="#005F59"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <filter
                          id="filter0_d_2085_4411"
                          x="0"
                          y="0.518988"
                          width="78.9006"
                          height="78.9026"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="3.48101"
                            operator="erode"
                            in="SourceAlpha"
                            result="effect1_dropShadow_2085_4411"
                          />
                          <feOffset dx="6.96203" dy="3.48101" />
                          <feGaussianBlur stdDeviation="5.22152" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2085_4411"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2085_4411"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <button className="w-[15rem] ml-5 h-[2.5rem] bg-darkGreen rounded-full text-white text-[1rem] md:w-[20rem] font-bold">
                      Book a slot now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
