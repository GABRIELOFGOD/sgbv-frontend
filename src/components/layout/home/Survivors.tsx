
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import SGBVCard from "./SGBVCard";

const Survivors = () => {
  return (
    <div className="py-10 w-full">
      <p className="font-semibold text-lg mb-5">Hear what SGBV Survivors say:</p>

      {/* Swiper Container */}
      <Swiper
        spaceBetween={20} // Gap between cards
        slidesPerView={1} // Show 1 card on small screens
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 cards on md and above
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 5s
        loop={true} // Infinite loop
        modules={[Autoplay]}
        className="w-full"
      >
        <SwiperSlide>
          <SGBVCard
            name="Jane Doe"
            kind="Domestic Violence"
            words="I was a victim of domestic violence for 5 years. I was beaten and abused by my husband. I was afraid to speak out because I thought no one would believe me. I am glad I did."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SGBVCard
            name="Hannah Wyne"
            kind="Female Genital Mutilation"
            words="The pain I went through during FGM was unbearable. I was only 10 years old. I was afraid to speak out because I thought no one would believe me. I am glad I did."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SGBVCard
            name="Sandra Clark"
            kind="Child Marriage"
            words="As a child, I was forced into marriage by my parents. I was only 14 years old. I was afraid to speak out because I thought no one would believe me. I am glad I did."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SGBVCard
            name="Grace Smith"
            kind="Sexual Assault"
            words="I was sexually assaulted by my uncle. I was afraid to speak out because I thought no one would believe me. I am glad I did."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Survivors;
