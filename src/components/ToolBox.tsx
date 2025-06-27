import {
  SiAxios,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { BackgroundWrapper, SectionTitle } from "./AboutMe";

const toolBoxItems = [
  { title: "JavaScript", icon: SiJavascript },
  { title: "TypeScript", icon: SiTypescript },
  { title: "React", icon: SiReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "Redux", icon: SiRedux },
  { title: "React Hook Form", icon: SiReacthookform },
  { title: "Material UI", icon: SiMui },
  { title: "Axios", icon: SiAxios },
  { title: "HTML5", icon: SiHtml5 },
  { title: "CSS3", icon: SiCss3 },
  { title: "SASS", icon: SiSass },
  { title: "Jest", icon: SiJest },
  { title: "Figma", icon: SiFigma },
  { title: "Chrome DevTools", icon: SiGooglechrome },
  { title: "GitHub", icon: SiGithub },
  { title: "Vite", icon: SiVite },
  { title: "Node.js", icon: SiNodedotjs },
  { title: "Firebase", icon: SiFirebase },
  { title: "Vercel", icon: SiVercel },
];

const ToolBox = () => {
  const scrollingItems = [...toolBoxItems, ...toolBoxItems]; // duplicated for smooth loop

  return (
    <BackgroundWrapper className="p-8 md:col-span-3">
      <div>
        <SectionTitle title="Toolbox" />
        <div className="relative h-48 overflow-hidden mt-6">
          <div className="flex flex-col animate-vertical-scroll space-y-4">
            {scrollingItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded"
              >
                <item.icon className="text-2xl" />
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
