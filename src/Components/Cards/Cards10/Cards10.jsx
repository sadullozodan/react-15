import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

export default function Testimonials(props) {
  const { t } = useTranslation();

  const data = [
    {
      text: t("text45"),
      name: "Sara T",
    },
    {
      text: t("text45"),
      name: "John D",
    },
    {
      text: t("text45"),
      name: "Emily G",
    },
  ];

    const { text,text1 } = props;
  return (
    <div className="w-full  py-26">
      <Swiper
        modules={[ Autoplay]}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 2300 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className="w-[95%] mx-auto"
      >
        
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="text-center text-white px-10 border-2 border-[#CAFF33] rounded-lg py-10 bg-[#1C1C1C]">
              
              <div className="text-5xl text-lime-400 mb-16">“</div>

              <p className="text-gray-300 max-w-2xl mx-auto">
                {item.text}
              </p>

              <p className="mt-6 text-lime-400 font-semibold">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}