// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pallvaiavtar from "../../../assets/Avtars/Pallavi.png";
import star from "../../../assets/placementdetails/Star6.png";
import Frame from "../../../assets/placementdetails/Frame.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function PlacementCarousel() {
  return (
    <div className="relative">
      <img alt="frame" src={Frame} className="absolute mt-[-1rem] ml-4" />
      <div
        className="container mx-auto p-8 text-justify  "
        style={{
          borderRadius: "0.8125rem",

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
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos
              blanditiis qui ipsa sapiente eveniet odit harum quos optio sunt.
              Suscipit dolor voluptas labore, cupiditate dolorum sequi fugit
              dolore ducimus optio quisquam commodi recusandae enim. Rerum
              molestias ipsum, ducimus, dolorem obcaecati accusamus aspernatur
              eos iusto velit numquam, culpa est. Quibusdam esse voluptas optio.
              Numquam natus debitis architecto ad ipsum explicabo eos sed
              libero! Molestiae, placeat quisquam sequi harum debitis culpa
              ducimus esse ab? Neque excepturi repellendus sunt natus quo
              nostrum labore, possimus adipisci repudiandae provident blanditiis
              mollitia ab incidunt ex cumque officia, soluta iure, dignissimos
              aliquid illo. Facilis, odit iste.
            </p>
            <div className="flex justify-around p-2 mt-4">
              <img
                alt="logo"
                src={pallvaiavtar}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                }}
              />
              <div>
                <p className="text-darkGreen text-[1.5rem] font-bold">
                  Pallavi Rastogi
                </p>
                <span className="text-grey text-[1rem] font-medium">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p>Placed in</p>
                <p className="text-[1.5rem] font-bold">Wipro</p>
              </div>
              <div>
                <p>Job Switched in</p>
                <p className="text-[1.5rem] font-bold">10Days</p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-darkGreen font-Lexend text-[14px] font-normal leading-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos
              blanditiis qui ipsa sapiente eveniet odit harum quos optio sunt.
              Suscipit dolor voluptas labore, cupiditate dolorum sequi fugit
              dolore ducimus optio quisquam commodi recusandae enim. Rerum
              molestias ipsum, ducimus, dolorem obcaecati accusamus aspernatur
              eos iusto velit numquam, culpa est. Quibusdam esse voluptas optio.
              Numquam natus debitis architecto ad ipsum explicabo eos sed
              libero! Molestiae, placeat quisquam sequi harum debitis culpa
              ducimus esse ab? Neque excepturi repellendus sunt natus quo
              nostrum labore, possimus adipisci repudiandae provident blanditiis
              mollitia ab incidunt ex cumque officia, soluta iure, dignissimos
              aliquid illo. Facilis, odit iste.
            </p>
            <div className="flex justify-around p-2 mt-4">
              <img
                alt="logo"
                src={pallvaiavtar}
                style={{
                  borderRadius: " 3.125rem 3.125rem 0.1875rem 3.125rem",
                  background: "yellow",
                }}
              />
              <div>
                <p className="text-darkGreen text-[1.5rem] font-bold">
                  Pallavi Rastogi
                </p>
                <span className="text-grey text-[1rem] font-medium">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="flex p-2 justify-around text-darkGreen font-Lexend">
              <div>
                <p>Placed in</p>
                <p className="text-[1.5rem] font-bold">Wipro</p>
              </div>
              <div>
                <p>Job Switched in</p>
                <p className="text-[1.5rem] font-bold">10Days</p>
              </div>
              <div className="relative flex justify-center items-center text-[1rem] font-semibold">
                <p className="absolute text-center">25% Hike</p>

                <img src={star} alt="star" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>slice 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
