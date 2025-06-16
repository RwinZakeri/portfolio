import grainImage from "@/assets/images/grain.jpg";
import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2  after:outline-white/20 after:-outline-offset-2 after:rounded-3xl px-8 pt-8 lg:flex justify-between lg:gap-4">
        <div
          className="absolute inset-0 -z-10 opacity-5 bg-red-300"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
