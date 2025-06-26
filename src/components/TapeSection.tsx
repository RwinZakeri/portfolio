"use client";

import Star from "@/assets/icons/star";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../app/globals.css";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "UI/UX",
  "Tailwind CSS",
  "Web Performance",
  "Frontend Engineering",
  "Open Source",
  "Responsive Design",
];

const TapeSection = () => {
  return (
    <section
      className="py-16 overflow-x-clip"
      aria-label="Technology stack and key skills"
    >
      <div className="bg-gradient-to-r from-emerald-300 -rotate-3 to-sky-400">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <h2 className="sr-only">Key Skills and Technologies I Work With</h2>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={40}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            allowTouchMove={false}
            className="mySwiper flex items-center"
          >
            {[...skills, ...skills].map((item, index) => (
              <SwiperSlide
                key={`${item}-${index}`}
                className="!w-auto flex gap-2 items-center"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {item}
                </span>
                <Star />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TapeSection;
