import "../app/globals.css";

import { StarIcon } from "@/assets/icons/StarIcon";
import bookImage from "@/assets/images/book-cover.png";
import grainImage from "@/assets/images/grain.jpg";
import mapImage from "@/assets/images/map.png";
import personImage from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import ToolBox from "./ToolBox";

const hobbies = [
  { title: "Gaming", emoji: "🎮", top: "0%", left: "20%" },
  { title: "Reading", emoji: "📚", top: "0%", left: "65%" },
  { title: "Coding", emoji: "💻", top: "30%", left: "65%" },
  { title: "Music", emoji: "🎧", top: "40%", left: "8%" },
  { title: "Photography", emoji: "📷", top: "50%", left: "35%" },
  { title: "Traveling", emoji: "✈️", top: "70%", left: "56%" },
  { title: "Drawing", emoji: "🎨", top: "90%", left: "10%" },
];

export const BackgroundWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full bg-gray-800 rounded-3xl relative overflow-hidden lg:flex justify-between lg:gap-4 ${className}`}
  >
    <div
      className="absolute inset-0 z-10 opacity-5"
      style={{ backgroundImage: `url(${grainImage.src})` }}
    />
    <div className="absolute inset-0 z-10 rounded-3xl outline-2 outline-white/20 -outline-offset-2" />
    {children}
  </div>
);

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col gap-2 mb-4">
    <div className="flex items-center gap-1">
      <StarIcon />

      <h2 className="text-xl font-semibold font-serif">{title}</h2>
    </div>
    <p className="mb-2 text-sm text-white/60">
      Insights into who I am, what drives me, and what I love outside of work.
    </p>
  </div>
);

const AboutMe = () => {
  return (
    <section
      className="py-16 px-8 lg:w-4/5 mx-auto"
      id="about"
      aria-label="About Me Section"
    >
      <SectionHeader
        detail="A Glimpse Into My World"
        title="About Me"
        desc="Crafting creative code, one pixel at a time."
      />

      <div className="mt-20 flex flex-col gap-6">
        <div className="md:grid md:grid-cols-5 flex flex-col gap-8">
          {/* Favorite Book */}
          <BackgroundWrapper className="h-[320px] p-8 md:col-span-2">
            <div>
              <SectionTitle title="Favorite Book" />
              <div className="w-40 mx-auto mt-8">
                <Image
                  src={bookImage}
                  alt="Cover of Atomic Habits by James Clear"
                />
              </div>
            </div>
          </BackgroundWrapper>

          {/* Toolbox Skills */}
          <ToolBox />
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col gap-8">
          {/* Hobbies */}
          <BackgroundWrapper className="h-[320px] flex flex-col p-8">
            <SectionTitle title="Hobbies & Passions" />
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex gap-1 items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                >
                  <span className="font-medium font-sans text-sm text-gray-950">
                    {item.title}
                  </span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </BackgroundWrapper>

          {/* Location */}
          <BackgroundWrapper className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="Map showing my current location"
              className="min-w-full min-h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center">
              <Image src={personImage} alt="My memoji avatar smiling" />
            </div>
          </BackgroundWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
