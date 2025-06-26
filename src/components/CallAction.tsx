import ArrowUpIcon from "@/assets/icons/ArrowUp";
import Link from "next/link";

const CallAction = () => {
  return (
    <div className="px-8 md:w-4/5 mx-auto" id="contact">
      <div className=" rounded-xl mx-auto lg:mx-0 w-full p-4 gap-2 bg-linear-to-r from-emerald-300 to-sky-400 md:flex items-center justify-between">
        <div className="flex flex-col gap-4 md:gap-1 lg:w-3/5 mx-auto lg:mx-0">
          <h3 className="text-gray-950 md:text-left text-2xl font-bold text-center">
            Lets create something amazing toghether
          </h3>
          <p className="text-center md:text-left text-gray-400 text-sm">
            Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet
            consectetur consectetur
          </p>
        </div>

        <Link
          href={"tel:09032204382"}
          className=" mx-auto w-fit relative z-50 items-center flex gap-2 bg-gray-950 p-3 rounded-xl mt-5 px-6 hover:bg-gray-800 transition-all md:m-0"
        >
          <span className="text-sm">Contact Me</span>
          <ArrowUpIcon />
        </Link>
      </div>
    </div>
  );
};

export default CallAction;
