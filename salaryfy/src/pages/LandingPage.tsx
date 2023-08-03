// import React, { useState } from 'react';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import Typography from '@mui/material/Typography';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import AccordionCustom from "./Accordion";
import LandingPageTestimonials from "./LandingPageTestimonials";

const LandingPage = () => {
  return (
    <section className=" border-2 border-black">
      <div className="container mx-auto my-[100px] ">
        {/* First Banner Section */}
        <div className="flex ">
          <img
            className="w-[60.3125rem] h-[5.8125rem]"
            src="../../assets/Homepage/LandingPageBanner1.png"
            alt="LandingPageBannerSS"
          />
          <img
            className="w-[45.75rem] h-[5.8125rem]"
            src="../../assets/Homepage/LandingPageBanner1.1.png"
            alt="LandingPageBanner1.1.png"
          />
        </div>

        {/* companies gateways center  */}
        <div className="text-darkGreen  my-[80px] text-center ">
          <h2 className="text-[5rem] font-semibold w-[64.6875rem]text-center ">
            Your gateway to <span className="text-yellow">10,000+</span>{" "}
            companies
          </h2>
          <p className="text-[1.8375rem] font-medium mt-2">
            6874+ people have got their dream job through Salaryfy. When are you
            getting yours?
          </p>
        </div>

        {/* Second Banner Section */}
        <div className="flex">
          <img
            className="w-[60.3125rem] h-[5.8125rem]"
            src="../../assets/Homepage/LandingPageBanner2.png"
            alt="LandingPageBanner2"
          />
          <img
            className="w-[45.75rem] h-[5.8125rem]"
            src="../../assets/Homepage/LandingPageBanner2.1.png"
            alt="LandingPageBanner2.1"
          />
        </div>

        {/* How its works Section  */}
        <div className="mt-[100px] ">
          <h2 className="text-darkGreen text-center font-semibold	text-[5rem]">
            How it Works?
          </h2>
          <div className="flex justify-center  items-center mx-auto w-[100.3125rem] h-[48.125rem] bg-darkgrey rounded-[1.3125rem] mt-[80px] "></div>
        </div>

        {/* job-ready career section */}
        <div className="text-darkGreen mt-[190px] mx-[50px] flex text-[4.9375rem]">
          <div className="w-[50%]">
            <h2 className=" font-semibold	leading-[5.15406rem] max-w-[100%]">
              Get job-ready for an <br />
              <span className="text-yellow">in-demand </span>career
            </h2>{" "}
            <p className="font-normal text-[1.4375rem]	mt-[80px]">
              Our comprehensive training programs and expert career <br />{" "}
              guidance will help you succeed in any field. Start your journey{" "}
              <br />
              towards a fulfilling career today.
            </p>
            <img
              className="mt-[60px] w-[25.6875rem] h-[5.875rem] rounded-[1.4375rem]"
              src="../../assets/Homepage/InDemandCareer.png"
              alt="InDemandCareer"
            />
          </div>
          <div className="w-[50%] flex items-center p-[20px] flex-col gap-9 text-[2rem] text-center ">
            <div
              className="w-[35rem] h-[5rem] rounded-[2rem] pt-[10px]  "
              style={{ boxShadow: "7px 16px 56px 1px rgba(0, 0, 0, 0.10)" }}
            >
              55% average salary hike
            </div>

            <div
              className="w-[35rem] h-[5rem] rounded-[2rem] pt-[10px]  "
              style={{ boxShadow: "7px 16px 56px 1px rgba(0, 0, 0, 0.10)" }}
            >
              60LPA highest salary
            </div>

            <div
              className="w-[35rem] h-[5rem] rounded-[2rem] pt-[10px]  "
              style={{ boxShadow: "7px 16px 56px 1px rgba(0, 0, 0, 0.10)" }}
            >
              12k+ career transition
            </div>

            <div
              className="w-[35rem] h-[5rem] rounded-[2rem] pt-[10px]  "
              style={{ boxShadow: "7px 16px 56px 1px rgba(0, 0, 0, 0.10)" }}
            >
              10,000+ companies in network
            </div>
          </div>
        </div>

        {/* 360 career Developement */}
        <div className="py-[80px]">
          <img
            src="../../assets/Homepage/360CareerDevelopment-copy.png"
            alt="360 Career Development"
            className="w-[100%]"
          />
        </div>

        {/* Card Testimonials*/}
        <div className="container mx-auto  h-[35rem]  ">
          <Swiper
            slidesPerView={2}
            spaceBetween={"0px"}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-[28rem]"
          >
            <SwiperSlide>
              <LandingPageTestimonials
                content={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab nobis dolore culpa veritatis sequi eveniet inventore dolores aliquid fugit!"
                }
                imgSrc={"../../assets/Logos/Bloomberg-logo.png"}
              />
            </SwiperSlide>

            <SwiperSlide>
            <LandingPageTestimonials
                content={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab nobis dolore culpa veritatis sequi eveniet inventore dolores aliquid fugit!"
                }
                imgSrc={"../../assets/Logos/The_Economic_Times_logo.png"}
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <LandingPageTestimonials
                content={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab nobis dolore culpa veritatis sequi eveniet inventore dolores aliquid fugit!"
                }
              
                imgSrc={"../../assets/Logos/Bloomberg-logo.png "}
              />
            </SwiperSlide>

            <SwiperSlide>
            <LandingPageTestimonials
                content={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab nobis dolore culpa veritatis sequi eveniet inventore dolores aliquid fugit!"
                }
                imgSrc={"../../assets/Logos/The_Economic_Times_logo.png"}
              />
            </SwiperSlide>
            
          </Swiper>
        </div>

        {/* FAQS Section */}
        <div className=" flex justify-center items-center h-[75vh]">
          <div className=" w-[70%]  ">
            <div className="mb-[50px] text-center">
              <h2 className="text-[4rem] text-darkGreen font-semibold">FAQs</h2>
            </div>
            <AccordionCustom
              heading={"Question number 1"}
              content={"Lorem ipsum dolor sit amet."}
            />
            <AccordionCustom
              heading={"Question number 2"}
              content={"Lorem ipsum dolor sit amet."}
            />
            <AccordionCustom
              heading={"Question number 3"}
              content={"Lorem ipsum dolor sit amet."}
            />
            <AccordionCustom
              heading={"Question number 4"}
              content={"Lorem ipsum dolor sit amet."}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
