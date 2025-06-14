import starSvg from "@/assets/icons/star.svg";
import Image from "next/image";
const words = [
  "Hello",
  "World",
  "This",
  "Is",
  "A",
  "Test",
  "Hello",
  "World",
  "This",
  "Is",
  "A",
  "Test",
  "Hello",
  "World",
  "This",
  "Is",
  "A",
  "Test",
  "Hello",
  "World",
  "This",
  "Is",
  "A",
  "Test",
];

const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip">
      <div className=" bg-gradient-to-r from-emerald-300 -rotate-3 to-sky-400 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((item) => {
              return (
                <div key={item} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {item}
                  </span>
                  <Image
                    src={starSvg}
                    className="w-6 h-6 -rotate-12"
                    alt="star"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
