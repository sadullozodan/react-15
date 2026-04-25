import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";



export default function FAQCarousel(props) {
    const { text1,text2 } = props;
    const faqData = [
     {
       q: "How do I open an account with YourBank?",
       a: "Opening an account is easy..."
     },
     {
       q: "What documents do I need to apply for a loan?",
       a: "You will need ID, proof of income..."
     },
     {
       q: "How can I access my accounts online?",
       a: "Login via website and enter credentials..."
     },
     {
       q: "Are my transactions and personal information secure?",
       a: "Yes, we use encryption and MFA..."
     }
    ];
  return (
    <div className="w-[90%] m-auto mt-[80px] ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {faqData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1a1a1a] border border-[#CAFF33] p-[20px] rounded-2xl h-[300px]">
              <h2 className="text-white text-[18px] font-bold">
                {text1} {item.q}
              </h2>
              <p className="text-gray-400 mt-[10px] text-[14px]">
                {text2} {item.a}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}