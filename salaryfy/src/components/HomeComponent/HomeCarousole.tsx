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
          <TestimonalsCards
           testimonals={"The course was comprehensive and well structured, and what added to the major USPs of the course was the fact that there were live classes. These live sessions were really productive and interactive. The program helped me elevate my knowledge and skill levels and opened a lot of opportunities for me. " } 
           name={"Ritesh Sharma "}
           course={"Course–Data Science and Data Analytics Program"}
           />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
           testimonals={"The Business Analytics for Management I took was really comprehensive and detailed. It was interesting to learn under the guidance of experts and experienced trainers. It was overall a motivational and knowledgeable program that encouraged me to pursue a career in this highly rewarding field." } 
           name={"Riya Sharma"}
           course={"Course- Business Analytics for Management"}
           />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonalsCards
           testimonals={"For anyone who is looking forward to starting their career as a Data Scientist, this is the best program. The program covers the introduction of the basic concepts associated with the field of Data Scientist. Moreover, and the was well paced and accessible." } 
           name={"Kanchan Ahuja"}
           course={"Course- Business Analytics for Management"}
           />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
           testimonals={"The instructor was very eloquent, and he was very feature-rich. Also, I liked the idea of answering open-ended questions about data. Every beginner looking forward to starting a career in this field must know that this is the best program for him/her." } 
           name={"Pooja Bijlani "}
           course={"Course–Data Science and Data Analytics Program"}
           />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
           testimonals={"The instructor of the course was really supportive and helpful and helped me with the feature-rich. Moreover, I liked the idea of answering open-ended questions related to data. Everyone is looking forward to beginning a career in the field of Business Analytics"}
           name={"Simran Sahani"}
           course={"Course- Business Analytics for Management"}
           />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
           testimonals={"For anyone who is looking forward to beginning their career in the field of Business Analytics, this program is certainly the best one. The program is so comprehensive that it covers the introduction of all the basic concepts that are associated with the field of Business Analytics. "}
           name={"Devansh Dixit"}
           course={"Course- Business Analytics for Management"}
           />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
