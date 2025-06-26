import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";

const Card = ({
  children,
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div
        className={`bg-gray-800 rounded-3xl relative -z-10 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2  after:outline-white/20 after:-outline-offset-2 after:rounded-3xl px-8 pt-8 lg:flex justify-between lg:gap-4 ${className}`}
        {...other}
      >
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
