import Star from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";

const HeroOne = () => {
  return (
    <>
      <div
        className="absolute  inset-0 -z-30 opacity-5 "
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="p-8 md:py-48 relative z-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden pb-28">
        <div className="size-[620px] circle"></div>
        <div className="size-[820px] circle"></div>
        <div className="size-[1020px] circle"></div>
        <div className="size-[1220px] circle"></div>
        <HeroOrbit size={800} rotate={-72}>
          <Image className="size-28" src={Star} alt="star" color="white" />
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20}>
          <Image className="size-12" src={Star} alt="star" color="white" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <Image className="size-8" src={Star} alt="star" color="white" />
        </HeroOrbit>
        <HeroOrbit size={430} rotate={98}>
          <Image className="size-8" src={Star} alt="star" color="white" />
        </HeroOrbit>
        <HeroOrbit size={430} rotate={-14}>
          <Image
            className="size-8 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>

        <HeroOrbit size={440} rotate={90}>
          <Image
            className="size-5 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={530} rotate={178}>
          <Image
            className="size-8 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={530} rotate={144}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={0}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={90}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={180}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={-90}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <HeroOrbit size={650} rotate={27}>
          <Image
            className="size-14 opacity-50"
            src={Star}
            alt="star"
            color="white"
          />
        </HeroOrbit>
        <div className="flex flex-col items-center relative z-50">
          <div>
            <Image className="size-[100px]" src={memojiImage} alt="computer" />
          </div>
          <div className="bg-gray-950 px-4 py-1.5 border border-gray-800 flex items-center gap-2 rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full"></div>
            <div className="size-2.5 bg-green-500 rounded-full animate-ping absolute"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <h1 className="font-serif md:font-bold md:text-5xl text-3xl text-center mt-8">
              Building Exceptional User Experiences
            </h1>
            <p className="text-center mt-4 text-white/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              atque iusto nihil earum voluptas animi itaque consectetur,
              quisquam magni
            </p>
            <div className="flex flex-col mt-8 gap-4 md:flex-row items-center justify-center mx-auto ">
              <button className="w-fit  inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl font-semibold">
                <span>Explore My Work</span>
                <FaArrowDown className="text-white" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white rounded-xl bg-white h-12 px-6 text-gray-900 w-fit  ">
                <span>👋</span>
                <span className="font-semibold">Lets Connet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOne;
