// import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { HavingDoubts } from "../modules/questionnaire/components/having-doubts.component";
const Roadmap = () => {
  return (
    <>
      {/*Main Roadmap Div  */}

      <div className="bg-offwhite ">
        <div className="container   text-darkGreen flex flex-col  md:flex-row ">
          <div className=" w-[70%] pt-10 pb-10   text-[1.2rem] flex flex-col  md:text-[1.5rem] ml-[50px]">
            <h1 className="md:text-[2.3rem]  pb-5 md:mr-[18rem] " style={{ fontSize: '26px', lineHeight: '39px', fontWeight: '500' }}>
              Your Roadmap
            </h1>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                  <TimelineConnector color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item app-theme-text">
                    Create Your Profile
                    <p className="px-2 text-[lightgrey] ">
                      Build a strong and complete profile with accurate
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
                  <h2 className="list-item app-theme-text">
                    Connect with the Placement Manager
                    <p className="px-2 text-[lightgrey] ">
                      Reach out to the placement manager for guidance and
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
                  <h2 className="list-item app-theme-text">
                    Upload Essential documents
                    <p className="px-2 text-[lightgrey] ">
                      Upload all necessary documents such as your resume, certificates, and identity proof for verification.
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
                  <h2 className="list-item app-theme-text">
                    Aligned the profile with the Company
                    <p className="px-2 text-[lightgrey] ">
                      Tailor your profile according to the company's requirements to increase the chances of getting shortlisted.
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
                  <h2 className="list-item app-theme-text">
                    Recruitment in Progress
                    <p className="px-2 text-[lightgrey] ">
                      Stay updated on the recruitment status to be prepared for the next step.
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
                  <h2 className="list-item app-theme-text">
                    Final Selection
                    <p className="px-2 text-[lightgrey]">
                      Impress the recruiters with your skills and secure the position.
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
                  <h2 className="list-item app-theme-text">
                    Offer Letter Released
                    <p className="px-2 text-[0.6rem] md:text-[0.9rem] text-[lightgrey] ">
                      Receive the official offer letter and review the terms and conditions.
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
                  <h2 className="list-item app-theme-text">
                    Offer Letter Accepted
                    <p className="px-2 text-[lightgrey] ">
                      Confirm your acceptance of the offer letter to secure your position.
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
                  <h2 className="list-item app-theme-text">
                    Pay 1% of CTC
                    <p className="px-2 text-[lightgrey] ">
                      Pay the agreed 1% of the CTC as service fee for Salaryfy.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator className="ml-[-250px] md:ml-[-600px]">
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h2 className="list-item app-theme-text">
                    Appointment Letter Shared
                    <p className="px-2 text-[lightgrey]">
                      Get ready to join the company and receive your appointment letter with details about your role and benefits.
                    </p>
                  </h2>
                </TimelineContent>
              </TimelineItem>


            </Timeline>
          </div>

          {/* Having Doubts  */}
          {/* <HavingDoubts0 /> */}
          <div>
            <HavingDoubts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
