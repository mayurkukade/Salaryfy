// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import AnuragSrivastva from '../../../assets/Testimonals-Images/Anurag_Srivastava-min.png'
import BharatKumar from '../../../assets/Testimonals-Images/Bharat_Kumar-min.png'

import NameataKumar from '../../../assets/Testimonals-Images/Namrata_Kumar-min.png'

import Pallavi from '../../../assets/Testimonals-Images/Pallavi_Rustagi-min.png'
import PratyayDas from '../../../assets/Testimonals-Images/Pratyay_Das_Sharma-min.png'
import RahulYadav from '../../../assets/Testimonals-Images/Rahul_Yadav-min.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"
// import required modules
import { Autoplay, Pagination, Navigation ,FreeMode} from 'swiper/modules';
import TestimonalsCards from "./TestimonalsCards";

export default function HomeCarousole2() {
  return (
    <div className="container mx-auto ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination,Autoplay,Navigation]}
        className="mySwiper"
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
            testimonals={
              "My overall journey at Data Folkz has been great because my mentor has been super supportive and guided me throughout my journey at Data Folkz. The curriculum was thorough, was easy to follow.  "
            }
            name={"Anurag Srivastva "}
            testimonalsImg={AnuragSrivastva}
        
            company={"Deloitte"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
            testimonals={
              "I enjoyed this Data Science program thoroughly and got to learn about Data Engineering, Python, and other big data tools associated with Data Science.  The platform designed by Data Folkz assists with the coordination of practical as well as theoretical knowledge."
            }
            name={"Pallavi Rastogi"}
            
            company={"Wipro"}
            testimonalsImg={Pallavi}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonalsCards
            testimonals={
              "I was working as a Business Analyst in a firm. With the professional Data Science course offered by Data Folkz, I was able to see a bigger picture of what my career could be if I could grab some crucial skills and knowledge.  "
            }
            name={"Pratyay Das Sharma"}
        
            company={"Amazon"}
            testimonalsImg={PratyayDas}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
            testimonals={
              "The course was comprehensive and well structured, and what added to the major USPs of the course was the fact that there were live classes. These live sessions were really productive and interactive.  "
            }
            name={"Rahul Yadav"}
            
            company={"American Express"}
            testimonalsImg={RahulYadav}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
            testimonals={
              "For anyone who is looking forward to starting their career as a Data Scientist, this is the best program. The program covers the introduction of the basic concepts associated with the field of Data Scientist. Moreover, and the was well paced and accessible.   "
            }
            name={"Namrata Kumar "}
          
            company={"KPMG"}
            testimonalsImg={NameataKumar}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonalsCards
            testimonals={
              "The instructor was very eloquent, and he was very feature-rich. Also, I liked the idea of answering open-ended questions about data. Every beginner looking forward to starting a career in this field must know that this is the best program for him/her.   "
            }
            name={"Bharat Kumar"}
            
            company={"Accenture"}
            testimonalsImg={BharatKumar}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
