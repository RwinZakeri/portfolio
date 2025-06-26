"use client";
import ChromIco from "@/assets/icons/chrome.svg";
import Css3 from "@/assets/icons/css3.svg";
import GitHub from "@/assets/icons/github.svg";
import HTML5 from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JsIcon from "@/assets/icons/square-js.svg";
import { BackgroundWrapper, SectionTitle } from "./AboutMe";
import TechIcon from "./TechIcon";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/globals.css";
const toolBoxItems = [
  { title: "JavaScript", icon: JsIcon },
  { title: "React", icon: ReactIcon },
  { title: "HTML5", icon: HTML5 },
  { title: "CSS3", icon: Css3 },
  { title: "Chrome", icon: ChromIco },
  { title: "GitHub", icon: GitHub },
];

const ToolBox = () => {
  return (
    <BackgroundWrapper className=" p-8 md:col-span-3">
      <div>
        <SectionTitle title="Toolbox" />
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-6">
          <div className="flex flex-none py-0.5 gap-6">
            {toolBoxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded"
              >
                <TechIcon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default ToolBox;
