import grainImage from "@/assets/images/grain.jpg";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const cardData = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-24">
      <SectionHeader
        title="Happy Clients"
        desc="What Clients Say about Me"
        detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. "
      />
      <div className=" mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 flex-none">
          {cardData.map((item) => (
            <div
              key={item.name}
              className=" bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2  after:outline-white/20 after:-outline-offset-2 after:rounded-3xl p-4 lg:flex flex-col  justify-between max-w-xs md:max-w-md md:p-8"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 bg-red-300"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="flex items-center gap-2 ">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className="max-h-full"
                  />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className="text-sm text-white/40">{item.position}</div>
                </div>
              </div>
              <div className="mt-2 text-sm md:text-base ">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
