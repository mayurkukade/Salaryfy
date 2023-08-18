// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TestimonalsCards from "./TestimonalsCards";

export default function HomeCarousole2() {
  return (
    <div className="container mx-auto ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
        // Responsive settings
        breakpoints={{
          // When the screen width is 640px or larger
          // 340: {
          //   slidesPerView: 1, // Show 2 slides per view
          // },
          640: {
            slidesPerView: 2, // Show 2 slides per view
          },
          // When the screen width is 768px or larger
          768: {
            slidesPerView: 2, // Show 3 slides per view
          },
          // When the screen width is 1024px or larger
          1024: {
            slidesPerView: 3, // Show 4 slides per view
          },
        }}
      >
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
