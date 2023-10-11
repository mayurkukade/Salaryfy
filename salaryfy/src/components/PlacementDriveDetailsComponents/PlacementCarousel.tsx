// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import star from "../../../assets/placementdetails/Star6.png";
import Frame from "../../../assets/placementdetails/Frame.png";
import Raj from "../../../assets/placementTestimonies/Raj.jpg";
import Alok from "../../../assets/placementTestimonies/Alok.jpg";
import Priya from "../../../assets/placementTestimonies/Priya.jpg";
import Utkarsh from '../../../assets/placementTestimonies/Utkarsh.jpg'
import Vivek from '../../../assets/placementTestimonies/Vivek.jpg'
import Sameer from '../../../assets/placementTestimonies/Sameer.jpg'
import Poonam from '../../../assets/placementTestimonies/Poonam.jpeg'
import Karan from '../../../assets/placementTestimonies/Karan.jpg'
import Anita from '../../../assets/placementTestimonies/AArti.jpg'
import Naveen from '../../../assets/placementTestimonies/Naveen.jpg'
import Swati from '../../../assets/placementTestimonies/Swati.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function PlacementCarousel() {
  return (
    <div className="relative ">
      <img alt="frame" src={Frame} className="absolute mt-[-1rem] ml-4" />
      <div
        className="container mx-auto p-8 text-justify  h-[18rem]"
        style={{
          borderRadius: "0.8125rem",
          marginTop: "1rem",
          boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.09)",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "Thanks to Salaryfy, I found my dream role as an Optometry
              Associate at Lenskart. Grateful for the opportunity!"
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Raj}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Raj
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Optometry Associate
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  7 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "I owe my Field Sales job at Justdial to Salaryfy. Their
              dedication truly paid off for me."
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Naveen}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Naveen
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Field Sales
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  JustDial
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "Salaryfy helped me land my job at Lenskart. I'm so grateful for their support.
"
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Utkarsh}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Utkarsh
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "Salaryfy's unique approach landed me my Fun Consultant job at
              Hamleys. They made it happen!"{" "}
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Alok}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Alok
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Consultant 
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Hamleys
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "Salaryfy made my job search easy. Now I'm happily working as an
              Optometry Associate at Lenskart."{" "}
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Priya}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Priya
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                Optometry Associate
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  6 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
              "Salaryfy is incredible! I got hired at Trent within a week. I'm so thankful for this opportunity!
"
            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Vivek}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Vivek
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Trent
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
            "Salaryfy truly understands job seekers. I landed my Store Manager role at Lenskart, all thanks to them!"        </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Sameer}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Sameer
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Store Manager
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  13 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
            "Salaryfy's unique approach landed me my Fun Consultant job at Hamleys. They made it happen!"            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Poonam}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Poonam
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Consultant
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Hamleys
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
            "Finding my job as a Sales Associate at Lenskart was hassle-free with Salaryfy. Highly recommended!"            </p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Karan}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Karan
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Sales Associate
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
            "Salaryfy's guidance helped me secure my Sales Associate position at Lenskart. I'm thrilled!"</p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Anita}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Anita
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Sales Associate
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  Lenskart
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  12 Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-9 ">
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-6">
            "Thanks to Salaryfy, I'm excelling in my Field Sales role at Justdial. Great platform!"</p>
            <div className="flex   p-2 mt-4">
              <img
                alt="logo"
                src={Swati}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                  height: "4rem",
                  marginTop: "4px",
                }}
              />
              <div className="ml-4">
                <p className="text-darkGreen text-[1.1rem] mt-2 font-medium leading-[27px]">
                  Swati
                </p>
                <span className="text-grey text-[1rem] font-normal leading-[27px] ">
                  Field Sales
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p className="font-normal text-[12px] leading-[1.1rem]">
                  Placed in
                </p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  JustDial
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.1rem]">Job Switched in</p>
                <p className="text-[1.1rem] font-medium leading-[1.7rem]">
                  10Days
                </p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>

     
        </Swiper>
      </div>
    </div>
  );
}
